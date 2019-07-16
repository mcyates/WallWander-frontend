export const addImage = (image) => ({
	type: 'ADD_IMAGE',
	...image
});

export const getImage = (image) => ({
	type: 'GET_IMAGE',
	image
});

export const getImages = (images) => ({
	type: 'GET_IMAGES',
	images
});
