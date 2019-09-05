import reducer from './imageReducer';

describe('image reducer', () => {
	it('handles default case', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});
	it('handle GET_IMAGE', () => {
		const image = {
			url: 'loremupsum.jpg',
			height: 50,
			width: 60,
			nsfw: false,
			views: 100,
			format: 'jpg'
		};

		expect(
			reducer([], {
				type: 'GET_IMAGE',
				image
			})
		).toEqual([]);
	});
	it('handles GET_IMAGE if image is present in store', () => {
		const image = {
			url: 'loremupsum.jpg',
			height: 50,
			width: 60,
			nsfw: false,
			views: 100,
			format: 'jpg'
		};

		expect(
			reducer([image], {
				type: 'GET_IMAGE',
				image
			})
		).toEqual([image]);
	});
	it('handles GET_IMAGES', () => {
		const image = {
			url: 'loremupsum.jpg',
			height: 50,
			width: 60,
			nsfw: false,
			views: 100,
			format: 'jpg'
		};
		const images = [image, image];

		expect(
			reducer([], {
				type: 'GET_IMAGES',
				images
			})
		).toEqual(images);
	});
	it('handles ADD_IMAGE', () => {
		const image = {
			url: 'loremupsum.jpg',
			height: 50,
			width: 60,
			nsfw: false,
			views: 100,
			format: 'jpg'
		};
		expect(
			reducer([], {
				type: 'ADD_IMAGE',
				image
			})
		).toEqual([
			{
				...image
			}
		]);
	});
	it('handles REMOVE_IMAGE', () => {
		const image = {
			url: 'loremupsum.jpg',
			height: 50,
			width: 60,
			nsfw: false,
			views: 100,
			format: 'jpg'
		};

		expect(
			reducer([image], {
				type: 'REMOVE_IMAGE',
				...image
			})
		).toEqual([]);
	});
});
