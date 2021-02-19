import { IEvent, IHandlerResponse } from './src/interfaces';

export async function handler(event: IEvent): Promise<IHandlerResponse> {
	console.log(process.env.STAGE);
	console.log(event);

	return {
		statusCode: 200,
	};
}
