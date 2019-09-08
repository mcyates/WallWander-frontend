import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Settings from '../Profile/Settings';

afterEach(cleanup);

describe('Settings', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<Settings />);
		expect(asFragment).toMatchSnapshot();
	});
});
