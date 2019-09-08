import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DeleteModal from '../DeleteModal';

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

describe('DeleteModal', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<DeleteModal />);
		expect(asFragment).toMatchSnapshot();
	});
});
