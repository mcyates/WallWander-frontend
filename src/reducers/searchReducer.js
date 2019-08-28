const defaultState = {
	nsfw: false
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'NSFW':
			return {
				...state,
				...action
			};
		default:
			return state;
	}
};
