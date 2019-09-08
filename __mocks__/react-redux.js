jest.mock('react-redux', () => {
	return {
		useDispatch() {
			return { dispatch: jest.fn() };
		},
		useSelector() {
			return {
				id: '12345',
				email: 'foo@bar.com',
				name: 'foobar',
				token: '123abc',
				nsfw: false
			};
		}
	};
});
