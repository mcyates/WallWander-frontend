import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NotFoundPage from '../NotFound';

afterEach(cleanup);

describe('NotFoundPage', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<NotFoundPage />);
		expect(asFragment).toMatchSnapshot();
	});
});
