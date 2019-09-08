import React from 'react';
import { render, cleanup } from '@testing-library/react';

import WallpaperList from '../WallpaperList';

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

describe('WallpaperList', () => {
	const mock = jest.fn();
	const props = {
		images: [],
		setImages: mock,
		pageChangeUrl: '/123/',
		paginationData: {
			lastPage: 12
		}
	};
	it('should match snapshot', () => {
		const { asFragment } = render(
			<WallpaperList
				images={props.images}
				setImages={props.setImages}
				pageChangeUrl={props.pageChangeUrl}
				paginationData={props.paginationData}
			/>
		);
		expect(asFragment).toMatchSnapshot();
	});
});
