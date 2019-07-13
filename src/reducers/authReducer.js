export default (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				...action
			};
		case 'REGISTER':
			return {
				...state,
				...action.user
			};
		default:
			return state;
	}
};
