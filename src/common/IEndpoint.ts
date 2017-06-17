export class Endpoint {
	chipId: number;
	ip: string;
	ios: IO[];
	active: boolean;

	static updateIO(endpoint: Endpoint, inputPin: number, updatedIO: {}) {
		return endpoint.ios.map((io: IO) => {
			if (io.inputPin === inputPin) {
				return IO.update(io, updatedIO);
			}
			return io;
		});
	}

}

export class IO {
	title: string;
	inputPin: number;
	outputPin: number;
	inputLevel: number;
	toggleOutput: boolean;
	activated: boolean;

	static update(oldIO, newIO) {
		return {...oldIO, ...newIO};
	}
}
