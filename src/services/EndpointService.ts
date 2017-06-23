import { BaseService } from './BaseService';
import { IIO } from '../common/IIO';
export class EndpointService extends BaseService {

	getEndpoints(params: object = {}): Promise<[IIO]> {
		return this.get(`${this.baseApi}endpoints${this.objectToParam(params)}`);
	}

	updateEndpoint(io: IIO): Promise<IIO> {
		return this.put(`${this.baseApi}endpoints/${io.id}`, io);
	}
}
