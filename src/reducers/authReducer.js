export default (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...action
			};
		case 'REGISTER':
			return {
				...state,
				...action
			};
		case 'SETNAME':
			return {
				...state,
				...action
			};
		default:
			return state;
	}
};
