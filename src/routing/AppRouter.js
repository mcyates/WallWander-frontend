import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import { Navbar } from '../shared/Navbar';
import RegistrationPage from '../pages/RegistrationPage';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Router>
				<NotFound default />
				<HomePage path="/" />
				<LoginPage path="/login" />
				<RegistrationPage path="/register" />
			</Router>
		</Suspense>
	);
};

export default AppRouter;
