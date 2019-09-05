import * as actions from './search';

describe('action creators', () => {
	it('should create an action to change search NSFW', () => {
		const nsfw = true;
		const nsfw2 = false;

		const expectedAction = {
			type: 'NSFW',
			nsfw: true
		};

		expect(actions.setNsfw(nsfw)).toEqual(expectedAction);
	});
});
