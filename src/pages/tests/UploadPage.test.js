import React from 'react';
import { render, cleanup } from '@testing-library/react';

import UploadPage from '../UploadPage';

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

describe('UploadPage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<UploadPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
