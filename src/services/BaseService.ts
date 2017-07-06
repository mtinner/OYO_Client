export abstract class BaseService {
	protected readonly baseApi = '/api/';

	toJson<T>(response: Response): Promise<T> {
		return Promise.resolve(response.json());
	}

	get<T>(api) {
		return fetch(api)
			.then(res => this.toJson<T>(res));
	}

	put<T>(api, body) {
		return fetch(api, {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json'
			}
		}).then(res => this.toJson<T>(res));
	}

	objectToParam(obj): string {
		let paramsString = Object.keys(obj).map((key) => {
			return key + '=' + obj[key];
		}).join('&');
		return !paramsString.length ? '' : `?${paramsString}`;
	}
}
