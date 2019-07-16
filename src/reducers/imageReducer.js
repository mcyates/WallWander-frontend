export default (state = [], action) => {
	switch (action.type) {
		case 'GET_IMAGE':
			return [...state, action.image];
		case 'GET_IMAGES':
			console.log(action);
			return [...action.images];
		case 'ADD_IMAGE':
			return [...state, action.image];
		case 'REMOVE_IMAGE':
			return state.filter((image) => image.url !== action.url);
		default:
			return state;
	}
};
