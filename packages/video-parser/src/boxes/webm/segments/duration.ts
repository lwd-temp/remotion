import type {BufferIterator} from '../../../read-and-increment-offset';

export type DurationSegment = {
	type: 'duration-segment';
	duration: number;
};

export const parseDurationSegment = (
	iterator: BufferIterator,
): DurationSegment => {
	const duration = iterator.getFloat64();

	return {
		type: 'duration-segment',
		duration,
	};
};
