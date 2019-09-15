import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Wallpaper from '../Wallpaper';

afterEach(cleanup);

jest.mock('react-redux', () => {
	return {
		useDispatch() {
			return { dispatch: jest.fn() };
		},
		useSelector() {
			return true;
		}
	};
});

describe('Wallpaper', () => {
	const wallpaperData = {
		id: '123abc',
		author: 'foobar',
		isAuthed: true,
		user: {
			id: '123abc',
			name: 'wooo',
			email: 'woo@bar.com'
		},
		image: {
			url: '1/11/1////1111111/1',
			secureUrl: '1///////1//1111111111111'
		}
	};
	it('should match snapshot', () => {
		const { asFragment } = render(<Wallpaper wallpaperData={wallpaperData} />);
		expect(asFragment).toMatchSnapshot();
	});
});
