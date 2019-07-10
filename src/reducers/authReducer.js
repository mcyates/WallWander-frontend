export default (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				...action.user
			};
		case 'REGISTER':
			return {
				...action.user
			};
		default:
			return state;
	}
};
