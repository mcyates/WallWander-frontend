import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Uploads from '../Profile/Uploads';

afterEach(cleanup);

describe('Uploads', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<Uploads />);
		expect(asFragment).toMatchSnapshot();
	});
});
