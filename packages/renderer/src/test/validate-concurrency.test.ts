import {validateConcurrency} from '../validate-concurrency';
import {expectToThrow} from './expect-to-throw';

const invalidConcurrency: String = 'invalidConcurrency';

test('setConcurrency should throw if concurrency is not a number', () => {
	expectToThrow(
		() => validateConcurrency(invalidConcurrency, 'concurrencyPerLambda'),
		/concurrencyPerLambda must be a number but is/
	);
});

test('setConcurrency should NOT throw if concurrency is a number', () => {
	expect(() => validateConcurrency(2, 'concurrencyPerLambda')).not.toThrow();
});

test('setConcurrency should throw if concurrency is too high', () => {
	expect(() => validateConcurrency(50, 'concurrencyPerLambda')).toThrow(
		/concurrencyPerLambda is set higher than the amount of CPU cores available/
	);
});
