import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import Settings from '../Profile/Settings';

jest.mock('react-redux', () => {
	return {
		useDispatch() {
			return { dispatch: jest.fn() };
		},
		useSelector() {
			return {
				id: '12345',
				email: 'foo@bar.com',
				name: 'foobar',
				token: '123abc'
			};
		}
	};
});

afterEach(cleanup);

describe('Settings', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<Settings />);
		expect(asFragment).toMatchSnapshot();
	});
});
