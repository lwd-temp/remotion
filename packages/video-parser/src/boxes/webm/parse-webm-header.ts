import {getArrayBufferIterator} from '../../read-and-increment-offset';
import {expectSegment} from './segments';

// Parsing according to https://darkcoding.net/software/reading-mediarecorders-webm-opus-output/
export const parseWebm = (data: ArrayBuffer) => {
	const counter = getArrayBufferIterator(data, 4);
	const length = counter.getEBML();

	if (length !== 31) {
		throw new Error(`Expected header length 31, got ${length}`);
	}

	// Discard header for now
	counter.discard(31);

	return expectSegment(counter);
};
