import {makeStreamPayloadMessage} from '@remotion/streaming';
import type {SerializedArtifact} from '../helpers/serialize-artifact';
import type {LambdaErrorInfo} from '../helpers/write-lambda-error';
import type {RenderStillLambdaResponsePayload} from '../still';

const framesRendered = 'frames-rendered' as const;
const errorOccurred = 'error-occurred' as const;
const renderIdDetermined = 'render-id-determined' as const;
const videoChunkRendered = 'video-chunk-rendered' as const;
const audioChunkRendered = 'audio-chunk-rendered' as const;
const chunkComplete = 'chunk-complete' as const;
const stillRendered = 'still-rendered' as const;
const lambdaInvoked = 'lambda-invoked' as const;
const artifactEmitted = 'artifact-emitted' as const;

const messageTypes = {
	'1': {type: framesRendered},
	'2': {type: errorOccurred},
	'3': {type: renderIdDetermined},
	'4': {type: videoChunkRendered},
	'5': {type: audioChunkRendered},
	'6': {type: stillRendered},
	'7': {type: chunkComplete},
	'8': {type: lambdaInvoked},
	'9': {type: artifactEmitted},
} as const;

export type MessageTypeId = keyof typeof messageTypes;
type MessageType = (typeof messageTypes)[MessageTypeId]['type'];

export const formatMap: {[key in MessageType]: 'json' | 'binary'} = {
	[framesRendered]: 'json',
	[errorOccurred]: 'json',
	[renderIdDetermined]: 'json',
	[videoChunkRendered]: 'binary',
	[audioChunkRendered]: 'binary',
	[stillRendered]: 'json',
	[chunkComplete]: 'json',
	[lambdaInvoked]: 'json',
	[artifactEmitted]: 'json',
};

export type StreamingPayload =
	| {
			type: typeof framesRendered;
			payload: {
				rendered: number;
				encoded: number;
			};
	  }
	| {
			type: typeof videoChunkRendered;
			payload: Buffer;
	  }
	| {
			type: typeof audioChunkRendered;
			payload: Buffer;
	  }
	| {
			type: typeof errorOccurred;
			payload: {
				error: string;
				shouldRetry: boolean;
				errorInfo: LambdaErrorInfo;
			};
	  }
	| {
			type: typeof renderIdDetermined;
			payload: {
				renderId: string;
			};
	  }
	| {
			type: typeof stillRendered;
			payload: RenderStillLambdaResponsePayload;
	  }
	| {
			type: typeof chunkComplete;
			payload: {
				start: number;
				rendered: number;
			};
	  }
	| {
			type: typeof lambdaInvoked;
			payload: {
				attempt: number;
			};
	  }
	| {
			type: typeof artifactEmitted;
			payload: {
				artifact: SerializedArtifact;
			};
	  };

export const messageTypeIdToMessageType = (
	messageTypeId: MessageTypeId,
): MessageType => {
	const types = messageTypes[messageTypeId];
	if (!types) {
		throw new Error(`Unknown message type id ${messageTypeId}`);
	}

	return types.type;
};

const messageTypeToMessageId = (messageType: MessageType): MessageTypeId => {
	const id = (Object.keys(messageTypes) as unknown as MessageTypeId[]).find(
		(key) => messageTypes[key].type === messageType,
	) as MessageTypeId;

	if (!id) {
		throw new Error(`Unknown message type ${messageType}`);
	}

	return id;
};

export type StreamingMessage = {
	successType: 'error' | 'success';
	message: StreamingPayload;
};

export type OnMessage = (options: StreamingMessage) => void;

export type OnStream = (payload: StreamingPayload) => Promise<void>;

export const makeStreamPayload = ({message}: {message: StreamingPayload}) => {
	const body =
		formatMap[message.type] === 'json'
			? new TextEncoder().encode(JSON.stringify(message.payload))
			: (message.payload as Buffer);

	return makeStreamPayloadMessage({
		body,
		nonce: messageTypeToMessageId(message.type),
		status: 0,
	});
};
