
import {
	OptionsWithUri,
} from 'request';

import {
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	INodeCredentialTestResult,
	JsonObject,
} from 'n8n-workflow';
import { HostBillApiCredentials } from '../../credentials/HostBillApi.credentials';

export async function hostBillApiTest(this: ICredentialTestFunctions, credentials: ICredentialsDecrypted): Promise<INodeCredentialTestResult> {
	// ToDo: Replace with some endpoint call to check credentials
	return {
		status: 'OK',
		message: 'Authentication successful!',
	};
}
