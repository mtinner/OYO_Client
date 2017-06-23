export abstract class BaseService {
	protected readonly baseApi = '/api/';

	toJson(response: Response): Promise<object> {
		return Promise.resolve(response.json());
	}

	get(api) {
		return fetch(api)
			.then(this.toJson);
	}

/*	post(api, body) {
		return fetch(api, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json'
			}
		}).then(this.toJson);
	}
	*/
	put(api, body) {
		return fetch(api, {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-type': 'application/json'
			}
		}).then(this.toJson);
	}

	objectToParam(obj): string {
		let paramsString = Object.keys(obj).map((key) => {
			return key + '=' + obj[key];
		}).join('&');
		return !paramsString.length ? '' : `?${paramsString}`;
	}
}
