import reducer from './authReducer';

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});
	it('should handle LOGIN', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: 'Foo Bar',
			token: 'jwtHere'
		};
		expect(
			reducer([], {
				type: 'LOGIN',
				...user
			})
		).toEqual({
			type: 'LOGIN',
			...user
		});
	});
	it('should handle REGISTER', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: '',
			token: 'jwtHere'
		};

		expect(
			reducer([], {
				type: 'REGISTER',
				...user
			})
		).toEqual({
			type: 'REGISTER',
			...user
		});
	});
	it('should handle SETNAME', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: 'Foo Bar',
			token: 'jwtHere'
		};
		expect(
			reducer([], {
				type: 'SETNAME',
				...user
			})
		).toEqual({
			type: 'SETNAME',
			...user
		});
	});
});
