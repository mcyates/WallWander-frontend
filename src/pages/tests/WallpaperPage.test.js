import React from 'react';
import { render, cleanup } from '@testing-library/react';

import WallpaperPage from '../WallpaperPage';

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

afterEach(cleanup);

describe('WallpaperPage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<WallpaperPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
