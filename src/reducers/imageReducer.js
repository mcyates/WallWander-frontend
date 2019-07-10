export default (state = [], action) => {
	switch (action.type) {
		case 'POPULATE_IMAGES':
			return action.images;
		case 'ADD_IMAGE':
			return [...state, { url: action.url }];
		case 'REMOVE_IMAGE':
			return state.filter((image) => image.url !== action.url);
		default:
			return state;
	}
};
