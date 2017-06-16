export interface IEndpoint {
	chipId: number;
	ip: string;
	ios: IIO[];
	active: boolean;
}

export interface IIO {
	title: string;
	inputPin: number;
	outputPin: number;
	inputLevel: number;
	activated: boolean;
}
