import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RegistrationPage from '../RegistrationPage';

jest.mock('react-redux', () => {
	return {
		useDispatch() {
			return { dispatch: jest.fn() };
		},
		useSelector() {
			return {
				id: '12345',
				email: 'foo@bar.com',
				name: '',
				token: '123abc'
			};
		}
	};
});

afterEach(cleanup);

describe('RegistrationPage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<RegistrationPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
