import React from 'react';
import { render, cleanup } from '@testing-library/react';

import UserForm from '../UserForm';

afterEach(cleanup);

describe('UserForm', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<UserForm />);
		expect(asFragment).toMatchSnapshot();
	});
});
