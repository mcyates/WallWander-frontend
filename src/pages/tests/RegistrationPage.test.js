import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { render, cleanup } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import RegistrationPage from '../RegistrationPage';

afterEach(cleanup);

describe('RegistrationPage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<RegistrationPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
