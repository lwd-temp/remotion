/* eslint-disable @typescript-eslint/no-use-before-define */
import type {EmittedArtifact, LogOptions} from '@remotion/renderer';
import {RenderInternals} from '@remotion/renderer';
import {existsSync, mkdirSync, rmSync} from 'fs';
import {join} from 'path';
import {VERSION} from 'remotion/version';
import {type EventEmitter} from 'stream';
import {
	compressInputProps,
	decompressInputProps,
	getNeedsToUpload,
	serializeOrThrow,
} from '../shared/compress-props';
import type {
	LambdaPayload,
	PostRenderData,
	RenderMetadata,
} from '../shared/constants';
import {
	CONCAT_FOLDER_TOKEN,
	LambdaRoutines,
	MAX_FUNCTIONS_PER_RENDER,
	artifactName,
} from '../shared/constants';
import {DOCS_URL} from '../shared/docs-url';
import {invokeWebhook} from '../shared/invoke-webhook';
import {
	validateDimension,
	validateDurationInFrames,
	validateFps,
} from '../shared/validate';
import {validateFramesPerLambda} from '../shared/validate-frames-per-lambda';
import {validateOutname} from '../shared/validate-outname';
import {validatePrivacy} from '../shared/validate-privacy';
import {planFrameRanges} from './chunk-optimization/plan-frame-ranges';
import {bestFramesPerLambdaParam} from './helpers/best-frames-per-lambda-param';
import {cleanupProps} from './helpers/cleanup-props';
import {getExpectedOutName} from './helpers/expected-out-name';
import {findOutputFileInBucket} from './helpers/find-output-file-in-bucket';
import {
	forgetBrowserEventLoop,
	getBrowserInstance,
} from './helpers/get-browser-instance';
import {getCurrentRegionInFunction} from './helpers/get-current-region';
import {lambdaWriteFile} from './helpers/io';
import {mergeChunksAndFinishRender} from './helpers/merge-chunks';
import type {OverallProgressHelper} from './helpers/overall-render-progress';
import {makeOverallRenderProgress} from './helpers/overall-render-progress';
import {streamRendererFunctionWithRetry} from './helpers/stream-renderer';
import {timer} from './helpers/timer';
import {validateComposition} from './helpers/validate-composition';
import {getTmpDirStateIfENoSp} from './helpers/write-lambda-error';

type Options = {
	expectedBucketOwner: string;
	getRemainingTimeInMillis: () => number;
};

const innerLaunchHandler = async ({
	functionName,
	params,
	options,
	overallProgress,
	registerCleanupTask,
}: {
	functionName: string;
	params: LambdaPayload;
	options: Options;
	overallProgress: OverallProgressHelper;
	registerCleanupTask: (cleanupTask: CleanupTask) => void;
}): Promise<PostRenderData> => {
	if (params.type !== LambdaRoutines.launch) {
		throw new Error('Expected launch type');
	}

	const startedDate = Date.now();

	const browserInstance = getBrowserInstance(
		params.logLevel,
		false,
		params.chromiumOptions,
	);

	const inputPropsPromise = decompressInputProps({
		bucketName: params.bucketName,
		expectedBucketOwner: options.expectedBucketOwner,
		region: getCurrentRegionInFunction(),
		serialized: params.inputProps,
		propsType: 'input-props',
	});

	const logOptions: LogOptions = {
		indent: false,
		logLevel: params.logLevel,
	};
	const serializedInputPropsWithCustomSchema = await inputPropsPromise;

	RenderInternals.Log.info(
		logOptions,
		'Waiting for browser to be ready:',
		serializedInputPropsWithCustomSchema,
	);
	const {instance} = await browserInstance;
	RenderInternals.Log.info(
		logOptions,
		'Validating composition, input props:',
		serializedInputPropsWithCustomSchema,
	);
	const startTime = Date.now();
	const comp = await validateComposition({
		serveUrl: params.serveUrl,
		composition: params.composition,
		browserInstance: instance,
		serializedInputPropsWithCustomSchema,
		envVariables: params.envVariables ?? {},
		timeoutInMilliseconds: params.timeoutInMilliseconds,
		chromiumOptions: params.chromiumOptions,
		port: null,
		forceHeight: params.forceHeight,
		forceWidth: params.forceWidth,
		logLevel: params.logLevel,
		server: undefined,
		offthreadVideoCacheSizeInBytes: params.offthreadVideoCacheSizeInBytes,
		onBrowserDownload: () => {
			throw new Error('Should not download a browser in Lambda');
		},
		onServeUrlVisited: () => {
			overallProgress.setServeUrlOpened(Date.now());
		},
	});
	overallProgress.setCompositionValidated(Date.now());
	RenderInternals.Log.info(
		logOptions,
		'Composition validated, resolved props',
		comp.props,
	);

	validateDurationInFrames(comp.durationInFrames, {
		component: 'passed to a Lambda render',
		allowFloats: false,
	});
	validateFps(comp.fps, 'passed to a Lambda render', false);
	validateDimension(comp.height, 'height', 'passed to a Lambda render');
	validateDimension(comp.width, 'width', 'passed to a Lambda render');

	RenderInternals.validateBitrate(params.audioBitrate, 'audioBitrate');
	RenderInternals.validateBitrate(params.videoBitrate, 'videoBitrate');

	RenderInternals.validateConcurrency({
		value: params.concurrencyPerLambda,
		setting: 'concurrencyPerLambda',
		checkIfValidForCurrentMachine: true,
	});

	const realFrameRange = RenderInternals.getRealFrameRange(
		comp.durationInFrames,
		params.frameRange,
	);

	const frameCount = RenderInternals.getFramesToRender(
		realFrameRange,
		params.everyNthFrame,
	);

	const framesPerLambda =
		params.framesPerLambda ?? bestFramesPerLambdaParam(frameCount.length);

	validateFramesPerLambda({
		framesPerLambda,
		durationInFrames: frameCount.length,
	});

	validateOutname({
		outName: params.outName,
		codec: params.codec,
		audioCodecSetting: params.audioCodec,
		separateAudioTo: null,
	});
	validatePrivacy(params.privacy, true);
	RenderInternals.validatePuppeteerTimeout(params.timeoutInMilliseconds);

	const {chunks} = planFrameRanges({
		framesPerLambda,
		frameRange: realFrameRange,
		everyNthFrame: params.everyNthFrame,
	});

	if (chunks.length > MAX_FUNCTIONS_PER_RENDER) {
		throw new Error(
			`Too many functions: This render would cause ${chunks.length} functions to spawn. We limit this amount to ${MAX_FUNCTIONS_PER_RENDER} functions as more would result in diminishing returns. Values set: frameCount = ${frameCount}, framesPerLambda=${framesPerLambda}. See ${DOCS_URL}/docs/lambda/concurrency#too-many-functions for help.`,
		);
	}

	overallProgress.setExpectedChunks(chunks.length);

	const sortedChunks = chunks.slice().sort((a, b) => a[0] - b[0]);

	const serializedResolved = serializeOrThrow(comp.props, 'resolved-props');

	const needsToUpload = getNeedsToUpload('video-or-audio', [
		serializedResolved.length,
		params.inputProps.type === 'bucket-url'
			? params.inputProps.hash.length
			: params.inputProps.payload.length,
	]);

	const serializedResolvedProps = await compressInputProps({
		propsType: 'resolved-props',
		region: getCurrentRegionInFunction(),
		stringifiedInputProps: serializedResolved,
		userSpecifiedBucketName: params.bucketName,
		needsToUpload,
	});

	registerCleanupTask(() => {
		return cleanupProps({
			serializedResolvedProps,
			inputProps: params.inputProps,
		});
	});

	const fps = comp.fps / params.everyNthFrame;

	// If for 150 functions, we stream every frame, we DDos ourselves.
	// Throttling a bit, allowing more progress if there is lower concurrency.
	const progressEveryNthFrame = Math.ceil(chunks.length / 15);

	const lambdaPayloads = chunks.map((chunkPayload) => {
		const payload: LambdaPayload = {
			type: LambdaRoutines.renderer,
			frameRange: chunkPayload,
			serveUrl: params.serveUrl,
			chunk: sortedChunks.indexOf(chunkPayload),
			composition: params.composition,
			fps: comp.fps,
			height: comp.height,
			width: comp.width,
			durationInFrames: comp.durationInFrames,
			bucketName: params.bucketName,
			retriesLeft: params.maxRetries,
			inputProps: params.inputProps,
			renderId: params.renderId,
			imageFormat: params.imageFormat,
			codec: params.codec,
			crf: params.crf,
			envVariables: params.envVariables,
			pixelFormat: params.pixelFormat,
			proResProfile: params.proResProfile,
			x264Preset: params.x264Preset,
			jpegQuality: params.jpegQuality,
			privacy: params.privacy,
			logLevel: params.logLevel ?? 'info',
			attempt: 1,
			timeoutInMilliseconds: params.timeoutInMilliseconds,
			chromiumOptions: params.chromiumOptions,
			scale: params.scale,
			everyNthFrame: params.everyNthFrame,
			concurrencyPerLambda: params.concurrencyPerLambda,
			muted: params.muted,
			audioBitrate: params.audioBitrate,
			videoBitrate: params.videoBitrate,
			encodingMaxRate: params.encodingMaxRate,
			encodingBufferSize: params.encodingBufferSize,
			launchFunctionConfig: {
				version: VERSION,
			},
			resolvedProps: serializedResolvedProps,
			offthreadVideoCacheSizeInBytes: params.offthreadVideoCacheSizeInBytes,
			deleteAfter: params.deleteAfter,
			colorSpace: params.colorSpace,
			preferLossless: params.preferLossless,
			compositionStart: realFrameRange[0],
			framesPerLambda,
			progressEveryNthFrame,
		};
		return payload;
	});

	RenderInternals.Log.info(
		logOptions,
		'Render plan: ',
		chunks.map((c, i) => `Chunk ${i} (Frames ${c[0]} - ${c[1]})`).join(', '),
	);

	const renderMetadata: RenderMetadata = {
		startedDate,
		totalChunks: chunks.length,
		estimatedTotalLambdaInvokations: [
			// Direct invokations
			chunks.length,
			// This function
			1,
		].reduce((a, b) => a + b, 0),
		estimatedRenderLambdaInvokations: chunks.length,
		compositionId: comp.id,
		siteId: params.serveUrl,
		codec: params.codec,
		type: 'video',
		imageFormat: params.imageFormat,
		inputProps: params.inputProps,
		lambdaVersion: VERSION,
		framesPerLambda,
		memorySizeInMb: Number(process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE),
		region: getCurrentRegionInFunction(),
		renderId: params.renderId,
		outName: params.outName ?? undefined,
		privacy: params.privacy,
		everyNthFrame: params.everyNthFrame,
		frameRange: realFrameRange,
		audioCodec: params.audioCodec,
		deleteAfter: params.deleteAfter,
		numberOfGifLoops: params.numberOfGifLoops,
		downloadBehavior: params.downloadBehavior,
		audioBitrate: params.audioBitrate,
		muted: params.muted,
	};

	const {key, renderBucketName, customCredentials} = getExpectedOutName(
		renderMetadata,
		params.bucketName,
		typeof params.outName === 'string' || typeof params.outName === 'undefined'
			? null
			: params.outName?.s3OutputProvider ?? null,
	);

	if (!params.overwrite) {
		const findOutputFile = timer(
			'Checking if output file already exists',
			params.logLevel,
		);
		const output = await findOutputFileInBucket({
			bucketName: params.bucketName,
			customCredentials,
			renderMetadata,
			region: getCurrentRegionInFunction(),
		});
		if (output) {
			throw new TypeError(
				`Output file "${key}" in bucket "${renderBucketName}" in region "${getCurrentRegionInFunction()}" already exists. Delete it before re-rendering, or set the 'overwrite' option in renderMediaOnLambda() to overwrite it."`,
			);
		}

		findOutputFile.end();
	}

	overallProgress.setRenderMetadata(renderMetadata);

	const outdir = join(RenderInternals.tmpDir(CONCAT_FOLDER_TOKEN), 'bucket');
	if (existsSync(outdir)) {
		rmSync(outdir, {
			recursive: true,
		});
	}

	mkdirSync(outdir);

	const files: string[] = [];

	const onArtifact = (artifact: EmittedArtifact): {alreadyExisted: boolean} => {
		if (
			overallProgress
				.getReceivedArtifacts()
				.find((a) => a.filename === artifact.filename)
		) {
			return {alreadyExisted: true};
		}

		const region = getCurrentRegionInFunction();
		const s3Key = artifactName(renderMetadata.renderId, artifact.filename);

		const start = Date.now();
		RenderInternals.Log.info(
			{indent: false, logLevel: params.logLevel},
			'Writing artifact ' + artifact.filename + ' to S3',
		);
		lambdaWriteFile({
			bucketName: renderBucketName,
			key: s3Key,
			body: artifact.content,
			region,
			privacy: params.privacy,
			expectedBucketOwner: options.expectedBucketOwner,
			downloadBehavior: params.downloadBehavior,
			customCredentials,
		})
			.then(() => {
				RenderInternals.Log.info(
					{indent: false, logLevel: params.logLevel},
					`Wrote artifact to S3 in ${Date.now() - start}ms`,
				);
				overallProgress.addReceivedArtifact({
					filename: artifact.filename,
					sizeInBytes: artifact.content.length,
					s3Url: `https://s3.${region}.amazonaws.com/${renderBucketName}/${s3Key}`,
					s3Key,
				});
			})
			.catch((err) => {
				overallProgress.addErrorWithoutUpload({
					type: 'artifact',
					message: (err as Error).message,
					name: (err as Error).name as string,
					stack: (err as Error).stack as string,
					tmpDir: null,
					frame: artifact.frame,
					chunk: null,
					isFatal: false,
					attempt: 1,
					willRetry: false,
					totalAttempts: 1,
				});
				overallProgress.upload();
				RenderInternals.Log.error(
					{indent: false, logLevel: params.logLevel},
					'Failed to write artifact to S3',
					err,
				);
			});
		return {alreadyExisted: false};
	};

	await Promise.all(
		lambdaPayloads.map(async (payload) => {
			await streamRendererFunctionWithRetry({
				files,
				functionName,
				outdir,
				overallProgress,
				payload,
				logLevel: params.logLevel,
				onArtifact,
			});
		}),
	);

	const postRenderData = await mergeChunksAndFinishRender({
		bucketName: params.bucketName,
		renderId: params.renderId,
		expectedBucketOwner: options.expectedBucketOwner,
		numberOfFrames: frameCount.length,
		audioCodec: params.audioCodec,
		chunkCount: chunks.length,
		codec: params.codec,
		customCredentials,
		downloadBehavior: params.downloadBehavior,
		fps,
		key,
		numberOfGifLoops: params.numberOfGifLoops,
		privacy: params.privacy,
		renderBucketName,
		inputProps: params.inputProps,
		serializedResolvedProps,
		renderMetadata,
		audioBitrate: params.audioBitrate,
		logLevel: params.logLevel,
		framesPerLambda,
		binariesDirectory: null,
		preferLossless: params.preferLossless,
		compositionStart: realFrameRange[0],
		outdir,
		files: files.sort(),
		overallProgress,
		startTime,
	});

	return postRenderData;
};

type CleanupTask = () => Promise<unknown>;

export const launchHandler = async (
	params: LambdaPayload,
	options: Options,
): Promise<{
	type: 'success';
}> => {
	if (params.type !== LambdaRoutines.launch) {
		throw new Error('Expected launch type');
	}

	const functionName =
		params.rendererFunctionName ??
		(process.env.AWS_LAMBDA_FUNCTION_NAME as string);

	const logOptions: LogOptions = {
		indent: false,
		logLevel: params.logLevel,
	};

	const cleanupTasks: CleanupTask[] = [];

	const registerCleanupTask = (task: CleanupTask) => {
		cleanupTasks.push(task);
	};

	const runCleanupTasks = () => {
		const prom = Promise.all(cleanupTasks)
			.then(() => {
				RenderInternals.Log.info(
					{indent: false, logLevel: params.logLevel},
					'Ran cleanup tasks',
				);
			})
			.catch((err) => {
				RenderInternals.Log.error(
					{indent: false, logLevel: params.logLevel},
					'Failed to run cleanup tasks:',
					err,
				);
			});

		cleanupTasks.length = 0;
		return prom;
	};

	const onTimeout = async () => {
		RenderInternals.Log.error(
			{indent: false, logLevel: params.logLevel},
			'Function is about to time out. Can not finish render.',
		);

		// @ts-expect-error
		(globalThis._dumpUnreleasedBuffers as EventEmitter).emit(
			'dump-unreleased-buffers',
		);

		runCleanupTasks();

		if (!params.webhook) {
			RenderInternals.Log.verbose(
				{
					indent: false,
					logLevel: params.logLevel,
				},
				'No webhook specified.',
			);
			return;
		}

		if (webhookInvoked) {
			RenderInternals.Log.verbose(
				{
					indent: false,
					logLevel: params.logLevel,
				},
				'Webhook already invoked. Not invoking again.',
			);
			return;
		}

		try {
			await invokeWebhook(
				{
					url: params.webhook.url,
					secret: params.webhook.secret,
					payload: {
						type: 'timeout',
						renderId: params.renderId,
						expectedBucketOwner: options.expectedBucketOwner,
						bucketName: params.bucketName,
						customData: params.webhook.customData ?? null,
					},
					redirectsSoFar: 0,
				},
				params.logLevel,
			);
			RenderInternals.Log.verbose(
				{
					indent: false,
					logLevel: params.logLevel,
				},
				'Successfully invoked timeout webhook.',
				params.webhook.url,
			);
			webhookInvoked = true;
		} catch (err) {
			if (process.env.NODE_ENV === 'test') {
				throw err;
			}

			RenderInternals.Log.error(
				{indent: false, logLevel: params.logLevel},
				'Failed to invoke webhook:',
			);
			RenderInternals.Log.error(
				{indent: false, logLevel: params.logLevel},
				err,
			);

			overallProgress.addErrorWithoutUpload({
				type: 'webhook',
				message: (err as Error).message,
				name: (err as Error).name as string,
				stack: (err as Error).stack as string,
				tmpDir: null,
				frame: 0,
				chunk: 0,
				isFatal: false,
				attempt: 1,
				willRetry: false,
				totalAttempts: 1,
			});
			overallProgress.upload();
		}
	};

	let webhookInvoked = false;
	const webhookDueToTimeout = setTimeout(
		onTimeout,
		Math.max(options.getRemainingTimeInMillis() - 1000, 1000),
	);

	RenderInternals.Log.info(
		logOptions,
		`Function has ${Math.max(
			options.getRemainingTimeInMillis() - 1000,
			1000,
		)} before it times out`,
	);

	const overallProgress = makeOverallRenderProgress({
		renderId: params.renderId,
		bucketName: params.bucketName,
		expectedBucketOwner: options.expectedBucketOwner,
		region: getCurrentRegionInFunction(),
		timeoutTimestamp: options.getRemainingTimeInMillis() + Date.now(),
		logLevel: params.logLevel,
	});

	try {
		const postRenderData = await innerLaunchHandler({
			functionName,
			params,
			options,
			overallProgress,
			registerCleanupTask,
		});
		clearTimeout(webhookDueToTimeout);

		if (!params.webhook || webhookInvoked) {
			return {
				type: 'success',
			};
		}

		try {
			await invokeWebhook(
				{
					url: params.webhook.url,
					secret: params.webhook.secret,
					payload: {
						type: 'success',
						renderId: params.renderId,
						expectedBucketOwner: options.expectedBucketOwner,
						bucketName: params.bucketName,
						customData: params.webhook.customData ?? null,
						outputUrl: postRenderData.outputFile,
						lambdaErrors: postRenderData.errors,
						outputFile: postRenderData.outputFile,
						timeToFinish: postRenderData.timeToFinish,
						costs: postRenderData.cost,
					},
					redirectsSoFar: 0,
				},
				params.logLevel,
			);
			webhookInvoked = true;
		} catch (err) {
			if (process.env.NODE_ENV === 'test') {
				throw err;
			}

			overallProgress.addErrorWithoutUpload({
				type: 'webhook',
				message: (err as Error).message,
				name: (err as Error).name as string,
				stack: (err as Error).stack as string,
				tmpDir: null,
				frame: 0,
				chunk: 0,
				isFatal: false,
				attempt: 1,
				willRetry: false,
				totalAttempts: 1,
			});
			overallProgress.upload();

			RenderInternals.Log.error(
				{indent: false, logLevel: params.logLevel},
				'Failed to invoke webhook:',
			);
			RenderInternals.Log.error(
				{indent: false, logLevel: params.logLevel},
				err,
			);
		}

		runCleanupTasks();

		return {
			type: 'success',
		};
	} catch (err) {
		if (process.env.NODE_ENV === 'test') {
			throw err;
		}

		RenderInternals.Log.error(
			{indent: false, logLevel: params.logLevel},
			'Error occurred',
			err,
		);
		overallProgress.addErrorWithoutUpload({
			chunk: null,
			frame: null,
			name: (err as Error).name as string,
			stack: (err as Error).stack as string,
			type: 'stitcher',
			isFatal: true,
			tmpDir: getTmpDirStateIfENoSp((err as Error).stack as string),
			attempt: 1,
			totalAttempts: 1,
			willRetry: false,
			message: (err as Error).message,
		});
		await overallProgress.upload();

		runCleanupTasks();

		RenderInternals.Log.error(
			{indent: false, logLevel: params.logLevel},
			'Wrote error to S3',
		);
		clearTimeout(webhookDueToTimeout);

		if (params.webhook && !webhookInvoked) {
			try {
				await invokeWebhook(
					{
						url: params.webhook.url,
						secret: params.webhook.secret,
						payload: {
							type: 'error',
							renderId: params.renderId,
							expectedBucketOwner: options.expectedBucketOwner,
							bucketName: params.bucketName,
							customData: params.webhook.customData ?? null,
							errors: [err as Error].map((e) => ({
								message: e.message,
								name: e.name as string,
								stack: e.stack as string,
							})),
						},
						redirectsSoFar: 0,
					},
					params.logLevel,
				);
				webhookInvoked = true;
			} catch (error) {
				if (process.env.NODE_ENV === 'test') {
					throw error;
				}

				overallProgress.addErrorWithoutUpload({
					type: 'webhook',
					message: (err as Error).message,
					name: (err as Error).name as string,
					stack: (err as Error).stack as string,
					tmpDir: null,
					frame: 0,
					chunk: 0,
					isFatal: false,
					attempt: 1,
					willRetry: false,
					totalAttempts: 1,
				});
				overallProgress.upload();

				RenderInternals.Log.error(
					{indent: false, logLevel: params.logLevel},
					'Failed to invoke webhook:',
				);
				RenderInternals.Log.error(
					{indent: false, logLevel: params.logLevel},
					error,
				);
			}
		}

		throw err;
	} finally {
		forgetBrowserEventLoop(params.logLevel);
	}
};
