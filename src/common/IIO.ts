export interface IIO {
	id: string;
	chipId: number;
	ip: string;
	title: string;
	toggleOutput: boolean;
	status: 0 | 1;
	inputPin: number
	outputPin: number;
	inputLevel: 0 | 1;
	activated: boolean;
}