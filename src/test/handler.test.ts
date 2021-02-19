import { handler } from '../../handler';

describe('Testing lambda handler function', () => {
	it('should return 200 OK', async () => {
		const response = await handler({ body: '' });
		expect(response.statusCode).toEqual(200);
	});
});
