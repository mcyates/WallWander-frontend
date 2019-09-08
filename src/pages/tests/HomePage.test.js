import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import HomePage from '../HomePage';

describe('HomePage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<HomePage />);
		expect(asFragment).toMatchSnapshot();
	});
});
