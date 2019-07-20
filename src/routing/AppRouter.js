import React, { Suspense } from 'react';
import { Router } from '@reach/router';

// import HomePage from '../pages/HomePage';
const HomePage = React.lazy(() => import('../pages/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const UploadPage = React.lazy(() => import('../pages/UploadPage'));
const WallpaperPage = React.lazy(() => import('../pages/WallpaperPage'));
const Navbar = React.lazy(() => import('../components/Navbar'));

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
