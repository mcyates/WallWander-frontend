import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import { Navbar } from '../shared/Navbar';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Router>
				<NotFound default />
				<HomePage path="/" />
			</Router>
		</Suspense>
	);
};

export default AppRouter;
