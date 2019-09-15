import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NameModal from './NameModal';

afterEach(cleanup);

describe('NameModal', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<NameModal />);
		expect(asFragment).toMatchSnapshot();
	});
});
