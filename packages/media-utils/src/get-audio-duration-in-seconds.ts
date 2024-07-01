/* eslint-disable @typescript-eslint/no-use-before-define */
import {onMediaError} from './media-tag-error-handling';
import {pLimit} from './p-limit';

const limit = pLimit(3);

const metadataCache: {[key: string]: number} = {};

const fn = (src: string): Promise<number> => {
	if (metadataCache[src]) {
		return Promise.resolve(metadataCache[src]);
	}

	if (typeof document === 'undefined') {
		throw new Error('getAudioDuration() is only available in the browser.');
	}

	const audio = document.createElement('audio');
	audio.src = src;
	return new Promise<number>((resolve, reject) => {
		const onError = () => {
			onMediaError({
				error: audio.error!,
				src,
				cleanup,
				reject,
				api: 'getAudioDurationInSeconds()',
			});
		};

		const onLoadedMetadata = () => {
			metadataCache[src] = audio.duration;
			resolve(audio.duration);
			cleanup();
		};

		const cleanup = () => {
			audio.removeEventListener('loadedmetadata', onLoadedMetadata);
			audio.removeEventListener('error', onError);
			audio.remove();
		};

		audio.addEventListener('loadedmetadata', onLoadedMetadata, {once: true});
		audio.addEventListener('error', onError, {once: true});
	});
};

/**
 * @default Get the audio file passed in parameter duration in seconds
 * @async
 * @param src path to the audio file
 * @return {number} duration of the audio file in seconds
 * @see [Documentation](https://www.remotion.dev/docs/get-audio-duration-in-seconds)
 */
export const getAudioDurationInSeconds = (src: string) => {
	return limit(fn, src);
};

/**
 * @deprecated Renamed to `getAudioDurationInSeconds`
 */
export const getAudioDuration = (src: string) => getAudioDurationInSeconds(src);
