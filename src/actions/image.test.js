import * as actions from './image';

describe('action creators', () => {
	it('should create an action to add an image', () => {
		const image = {
			height: 50,
			nsfw: false,
			url: 'http://foo.com/bar.jpg',
			secureUrl: 'https://foo.com/bar.jpg',
			width: 100,
			format: 'jpg',
			views: 38
		};
		const expectedAction = {
			type: 'ADD_IMAGE',
			image
		};

		expect(actions.addImage(image)).toEqual(expectedAction);
	});

	it('should create an action to get an image', () => {
		const image = {
			height: 50,
			nsfw: false,
			url: 'http://foo.com/bar.jpg',
			secureUrl: 'https://foo.com/bar.jpg',
			width: 100,
			format: 'jpg',
			views: 38
		};

		const expectedAction = {
			type: 'GET_IMAGE',
			image
		};

		expect(actions.getImage(image)).toEqual(expectedAction);
	});

	it('should create an action to get all images', () => {
		const images = [
			{
				height: 50,
				nsfw: false,
				url: 'http://foo.com/bar.jpg',
				secureUrl: 'https://foo.com/bar.jpg',
				width: 100,
				format: 'jpg',
				views: 38
			},
			{
				height: 50,
				nsfw: false,
				url: 'http://foo.com/bar.jpg',
				secureUrl: 'https://foo.com/bar.jpg',
				width: 100,
				format: 'jpg',
				views: 38
			}
		];

		const expectedAction = {
			type: 'GET_IMAGES',
			images
		};
		expect(actions.getImages(images)).toEqual(expectedAction);
	});

	it('should create an action to delete an image', () => {
		const image = {
			height: 50,
			nsfw: false,
			url: 'http://foo.com/bar.jpg',
			secureUrl: 'https://foo.com/bar.jpg',
			width: 100,
			format: 'jpg',
			views: 38
		};

		const expectedAction = {
			type: 'REMOVE_IMAGE',
			...image
		};

		expect(actions.deleteImage(image)).toEqual(expectedAction);
	});
});
