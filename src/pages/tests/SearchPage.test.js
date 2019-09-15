import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SearchPage from '../SearchPage';

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

describe('SearchPage', () => {
	const search = '?stars&nsfw=false';
	it('should match snapshot', () => {
		const { asFragment } = render(<SearchPage location={search} />);
		expect(asFragment).toMatchSnapshot();
	});
});
