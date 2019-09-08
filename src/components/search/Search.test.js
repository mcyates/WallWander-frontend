import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Search from './Search';

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

describe('Search', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<Search />);
		expect(asFragment).toMatchSnapshot();
	});
});
