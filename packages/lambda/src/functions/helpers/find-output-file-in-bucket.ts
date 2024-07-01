import {ROLE_NAME} from '../../api/iam-validation/suggested-policy';
import type {AwsRegion} from '../../client';
import type {CustomCredentials} from '../../shared/aws-clients';
import type {RenderMetadata} from '../../shared/constants';
import {getExpectedOutName} from './expected-out-name';
import {getOutputUrlFromMetadata} from './get-output-url-from-metadata';
import {lambdaHeadCommand} from './io';

export type OutputFileMetadata = {
	url: string;
};

export const findOutputFileInBucket = async ({
	region,
	renderMetadata,
	bucketName,
	customCredentials,
}: {
	region: AwsRegion;
	renderMetadata: RenderMetadata;
	bucketName: string;
	customCredentials: CustomCredentials | null;
}): Promise<OutputFileMetadata | null> => {
	if (!renderMetadata) {
		throw new Error('unexpectedly did not get renderMetadata');
	}

	const {renderBucketName, key} = getExpectedOutName(
		renderMetadata,
		bucketName,
		customCredentials,
	);

	try {
		await lambdaHeadCommand({
			bucketName,
			key,
			region,
			customCredentials,
		});
		return {
			url: getOutputUrlFromMetadata(
				renderMetadata,
				bucketName,
				customCredentials,
			).url,
		};
	} catch (err) {
		if ((err as Error).name === 'NotFound') {
			return null;
		}

		if (
			(err as Error).message === 'UnknownError' ||
			(err as {$metadata: {httpStatusCode: number}}).$metadata
				.httpStatusCode === 403
		) {
			throw new Error(
				`Unable to access item "${key}" from bucket "${renderBucketName}" ${
					customCredentials?.endpoint
						? `(S3 Endpoint = ${customCredentials?.endpoint})`
						: ''
				}. The "${ROLE_NAME}" role must have permission for both "s3:GetObject" and "s3:ListBucket" actions.`,
			);
		}

		throw err;
	}
};
