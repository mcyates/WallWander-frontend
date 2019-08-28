export default (state = [], action) => {
	switch (action.type) {
		case 'GET_IMAGE':
			return state.filter((image) => (image = action.image));
		case 'GET_IMAGES':
			return [...action.images];
		case 'ADD_IMAGE':
			return [...state, action.image];
		case 'REMOVE_IMAGE':
			return state.filter((image) => {
				return action.id !== image.id;
			});
		default:
			return state;
	}
};
