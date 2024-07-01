import type {LogLevel} from '@remotion/renderer';
import {RenderInternals} from '@remotion/renderer';
import path from 'node:path';
import {getExpectedOutName} from '../functions/helpers/expected-out-name';
import {getOverallProgressS3} from '../functions/helpers/get-overall-progress-s3';
import type {LambdaReadFileProgress} from '../functions/helpers/read-with-progress';
import {lambdaDownloadFileWithProgress} from '../functions/helpers/read-with-progress';
import type {AwsRegion} from '../pricing/aws-regions';
import type {CustomCredentials} from '../shared/aws-clients';
import {getAccountId} from '../shared/get-account-id';

export type DownloadMediaInput = {
	region: AwsRegion;
	bucketName: string;
	renderId: string;
	outPath: string;
	onProgress?: LambdaReadFileProgress;
	customCredentials?: CustomCredentials;
	logLevel?: LogLevel;
};

export type DownloadMediaOutput = {
	outputPath: string;
	sizeInBytes: number;
};

/**
 * @description Downloads a rendered video, audio or still to the disk of the machine this API is called from.
 * @see [Documentation](https://remotion.dev/docs/lambda/downloadmedia)
 * @param params.region The AWS region in which the media resides.
 * @param params.bucketName The `bucketName` that was specified during the render.
 * @param params.renderId The `renderId` that was obtained after triggering the render.
 * @param params.outPath Where to save the media.
 * @param params.onProgress Progress callback function - see docs for details.
 * @param params.customCredentials If the file was saved to a foreign cloud, pass credentials for reading from it.
 * @returns {Promise<RenderMediaOnLambdaOutput>} See documentation for detailed structure
 */

export const downloadMedia = async (
	input: DownloadMediaInput,
): Promise<DownloadMediaOutput> => {
	const expectedBucketOwner = await getAccountId({
		region: input.region,
	});
	const overallProgress = await getOverallProgressS3({
		bucketName: input.bucketName,
		expectedBucketOwner,
		region: input.region,
		renderId: input.renderId,
	});

	if (!overallProgress.renderMetadata) {
		throw new Error('Render did not finish yet');
	}

	const outputPath = path.resolve(process.cwd(), input.outPath);
	RenderInternals.ensureOutputDirectory(outputPath);

	const {key, renderBucketName, customCredentials} = getExpectedOutName(
		overallProgress.renderMetadata,
		input.bucketName,
		input.customCredentials ?? null,
	);

	const {sizeInBytes} = await lambdaDownloadFileWithProgress({
		bucketName: renderBucketName,
		expectedBucketOwner,
		key,
		region: input.region,
		onProgress: input.onProgress ?? (() => undefined),
		outputPath,
		customCredentials,
		logLevel: input.logLevel ?? 'info',
	});

	return {
		outputPath,
		sizeInBytes,
	};
};
