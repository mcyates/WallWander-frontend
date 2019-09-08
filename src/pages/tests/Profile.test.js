import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Profile from '../Profile/Profile';

afterEach(cleanup);

describe('Profile', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<Profile />);
		expect(asFragment).toMatchSnapshot();
	});
});
