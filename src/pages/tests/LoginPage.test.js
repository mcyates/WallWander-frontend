import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import LoginPage from '../LoginPage';
// var MockAdapter = require('axios-mock-adapter');

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

describe('LoginPage', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<LoginPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
