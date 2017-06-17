import {BaseService} from './BaseService';
import {Endpoint} from '../common/IEndpoint';
export class EndpointService extends BaseService {

	getEndpoints(): Promise<[Endpoint]> {
		return this.get(`${this.baseApi}endpoints`);
	}

	getEndpoint(chipId: number): Promise<Endpoint> {
		return this.get(`${this.baseApi}endpoints/${chipId}`);
	}

	updateEndpoint(endpoint: Endpoint): Promise<Endpoint> {
		return this.post(`${this.baseApi}endpoints/${endpoint.chipId}`, endpoint);
	}
}
