export abstract class BaseService {
	protected readonly baseApi = '/api/';

	toJson(response: Response): Promise<object> {
		return Promise.resolve(response.json());
	}
}
