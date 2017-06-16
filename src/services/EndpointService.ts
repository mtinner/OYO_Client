import {BaseService} from './BaseService';
import {IEndpoint} from '../common/IEndpoint';
export class EndpointService extends BaseService {

	getEndpoints(): Promise<[IEndpoint]> {
		return fetch(`${this.baseApi}endpoints`)
			.then(this.toJson);
	}

	getEndpoint(chipId: number): Promise<IEndpoint> {
		return fetch(`${this.baseApi}endpoints/${chipId}`)
			.then(this.toJson);
	}
}
