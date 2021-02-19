export interface IEvent {
	body: string;
}

export interface IHandlerResponse {
	statusCode: number;
	headers?: {
		[index: string]: unknown;
	};
	body?: string;
}
