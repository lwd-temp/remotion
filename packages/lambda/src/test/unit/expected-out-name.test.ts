import {expect, test} from 'vitest';
import type {RenderMetadata} from '../../defaults';
import {getExpectedOutName} from '../../functions/helpers/expected-out-name';

const bucketName = 'remotionlambda-98fsduf';

const testRenderMetadata: RenderMetadata = {
	compositionId: 'react-svg',
	estimatedRenderLambdaInvokations: 100,
	estimatedTotalLambdaInvokations: 100,
	framesPerLambda: 20,
	imageFormat: 'png',
	type: 'video',
	inputProps: {
		type: 'payload',
		payload: '{}',
	},
	lambdaVersion: '2022-02-14',
	memorySizeInMb: 2048,
	outName: undefined,
	region: 'eu-central-1',
	renderId: '9n8dsfafs',
	siteId: 'my-site',
	startedDate: Date.now(),
	totalChunks: 20,
	privacy: 'public',
	everyNthFrame: 1,
	frameRange: [0, 199],
	audioCodec: null,
	deleteAfter: null,
	numberOfGifLoops: null,
	downloadBehavior: {type: 'play-in-browser'},
	audioBitrate: null,
	muted: false,
	codec: 'h264',
};

test('Should get a custom outname', () => {
	expect(getExpectedOutName(testRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		renderBucketName: 'remotionlambda-98fsduf',
		key: 'renders/9n8dsfafs/out.mp4',
	});
});

test('Should save to a different outname', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		outName: {
			bucketName: 'my-bucket',
			key: 'my-key',
		},
	};
	expect(getExpectedOutName(newRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		renderBucketName: 'my-bucket',
		key: 'my-key',
	});
});

test('For stills', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		codec: null,
		type: 'still',
		imageFormat: 'png',
	};
	expect(getExpectedOutName(newRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		renderBucketName: 'remotionlambda-98fsduf',
		key: 'renders/9n8dsfafs/out.png',
	});
});

test('Just a custom name', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		type: 'still',
		imageFormat: 'jpeg',
		codec: null,
		outName: 'justaname.jpeg',
	};
	expect(getExpectedOutName(newRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		renderBucketName: 'remotionlambda-98fsduf',
		key: 'renders/9n8dsfafs/justaname.jpeg',
	});
});

test('Should throw on invalid names', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		type: 'still',
		imageFormat: 'png',
		codec: null,
		outName: '👺.jpeg',
	};
	expect(() => {
		getExpectedOutName(newRenderMetadata, bucketName, null);
	}).toThrow(/The S3 Key must match the RegExp/);
});

test('Should allow outName an outname with a slash', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		codec: null,
		audioCodec: null,
		type: 'still',
		imageFormat: 'jpeg',
		outName: 'justa/name.jpeg',
	};
	expect(getExpectedOutName(newRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		key: 'renders/9n8dsfafs/justa/name.jpeg',
		renderBucketName: 'remotionlambda-98fsduf',
	});
});

test('Should allow outName an outname with colon', () => {
	const newRenderMetadata: RenderMetadata = {
		...testRenderMetadata,
		codec: null,
		audioCodec: null,
		type: 'still' as const,
		imageFormat: 'jpeg',
		outName: 'ap-east-1:xxxxxx/video/XXXXX-0b9ba84XXXX.mp4',
	};
	expect(getExpectedOutName(newRenderMetadata, bucketName, null)).toEqual({
		customCredentials: null,
		key: 'renders/9n8dsfafs/ap-east-1:xxxxxx/video/XXXXX-0b9ba84XXXX.mp4',
		renderBucketName: 'remotionlambda-98fsduf',
	});
});
