export interface IIO {
	id: string;
	chipId: number;
	ip: string;
	title: string;
	toggleOutput: boolean;
	status: 0 | 1;
	inputPin: number;
	outputPin: number;
	inputLevel: 0 | 1;
	activated: boolean;
}

export function ioSort(io1, io2, attribute = 'title') {
	if (io1[attribute] > io2[attribute]) {
		return 1;
	}

	if (io1[attribute] < io2[attribute]) {
		return -1;
	}

	return 0;
}