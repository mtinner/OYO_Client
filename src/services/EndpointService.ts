import { BaseService } from './BaseService';
import { IIO } from '../common/IIO';

export class EndpointService extends BaseService {

	DATA_ENDPOINT = { outputPin: 7, inputPin: 2, chipId: 10759249, id: '10759249_2', ip: '192.168.178.35', inputLevel: 0, status: 0, activated: true };

	getEndpoints(params: object = {}): Promise<any> {
		return Promise.resolve([this.DATA_ENDPOINT]);
	}

	updateEndpoint(io: IIO): Promise<any> {
		return Promise.resolve(this.DATA_ENDPOINT);
	}
}
