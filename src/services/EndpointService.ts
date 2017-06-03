import {BaseService} from './BaseService';
import {IEndpoint} from '../common/IEndpoint';
export class EndpointService extends BaseService {

	get endpoints(): Promise<[IEndpoint]> {
		return fetch(`${this.baseApi}endpoints`)
			.then(this.toJson);
	}
}
