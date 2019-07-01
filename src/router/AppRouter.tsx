import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import HomePage from '../pages/HomePage';

const AppRouter = () => {
	<Suspense fallback={<div>Loading...</div>}>
		<Router classname='router'>
			<HomePage path='/' />
		</Router>
	</Suspense>;
};

export default AppRouter;
