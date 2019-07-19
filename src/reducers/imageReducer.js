export default (state = [], action) => {
	switch (action.type) {
		case 'GET_IMAGE':
			return [...state, action.image];
		case 'GET_IMAGES':
			return [...action.images];
		case 'ADD_IMAGE':
			return [...state, action.image];
		case 'REMOVE_IMAGE':
			return state.filter(({ secureUrl }) => secureUrl !== action.secureUrl);
		// return state.images.filter((image) => {
		// 	if (image) {
		// 		return action.url !== image.url;
		// 	}
		// 	return state;
		// });
		default:
			return state;
	}
};
