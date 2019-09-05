import reducer from './searchReducer';

describe('search reducer', () => {
	it('handles default case', () => {
		expect(reducer(undefined, {})).toEqual({ nsfw: false });
	});

	it('handles NSFW case', () => {
		const action = {
			type: 'NSFW',
			nsfw: true
		};
		const action2 = {
			type: 'NSFW',
			nsfw: false
		};
		expect(reducer({}, action)).toEqual({
			type: 'NSFW',
			nsfw: true
		});
		expect(reducer({ nsfw: true }, action2)).toEqual({
			type: 'NSFW',
			nsfw: false
		});
	});
});
