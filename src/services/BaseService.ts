export abstract class BaseService {
	protected readonly baseApi = 'http://192.168.178.44:8610/api/';

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

	post<T>(api, body) {
		return fetch(api, {
			method: 'POST',
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
