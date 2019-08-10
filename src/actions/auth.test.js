import * as auth from './auth';

describe('synchronous action creators', () => {
	it('should create an action to login a user', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: 'Foo Bar',
			token: 'jwtHere'
		};
		const expectedAction = {
			type: 'LOGIN',
			...user
		};

		expect(auth.login(user)).toEqual(expectedAction);
	});

	it('should create an action to register a user', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!'
		};

		const expectedAction = {
			type: 'REGISTER',
			...user
		};

		expect(auth.register(user)).toEqual(expectedAction);
	});

	it('should create an action to set a users name', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: 'Foo Bar'
		};
		const expectedAction = {
			type: 'SETNAME',
			...user
		};
		expect(auth.setName(user)).toEqual(expectedAction);
	});

	it('should create an action to logout a user', () => {
		const user = {
			email: 'foo@bar.com',
			password: 'Foobar!',
			name: 'Foo Bar',
			token: 'jwtHere'
		};

		const expectedAction = {
			type: 'LOGOUT',
			...user
		};

		expect(auth.logout(user)).toEqual(expectedAction);
	});
});
