import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import { Navbar } from '../components/Navbar';
import RegistrationPage from '../pages/RegistrationPage';
import { UploadPage } from '../pages/UploadPage';
import WallpaperPage from '../pages/WallpaperPage';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Router>
				<NotFound default />
				<HomePage path="/" />
				<LoginPage path="/login" />
				<RegistrationPage path="/register" />
				<UploadPage path="/upload" />
				<WallpaperPage path="/wallpapers/:id" />
			</Router>
		</Suspense>
	);
};

export default AppRouter;
