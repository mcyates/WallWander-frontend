import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Thumb from '../Thumb';

afterEach(cleanup);

jest.mock('react-redux', () => {
	return {
		useDispatch() {
			return { dispatch: jest.fn() };
		},
		useSelector() {
			return true;
		}
	};
});

describe('Thumb', () => {
	const image = { id: '123abc' };
	it('should match snapshot', () => {
		const { asFragment } = render(<Thumb image={image} />);
		expect(asFragment).toMatchSnapshot();
	});
});
