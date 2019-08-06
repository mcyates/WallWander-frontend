import React, { Suspense } from 'react';
import { Router } from '@reach/router';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Profile = React.lazy(() => import('../pages/Profile'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const UploadPage = React.lazy(() => import('../pages/UploadPage'));
const WallpaperPage = React.lazy(() => import('../pages/WallpaperPage'));

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<NotFound default />
				<HomePage path="/" />
				<LoginPage path="/login" />
				<RegistrationPage path="/register" />
				<Profile path="/profile/:id" />
				<UploadPage path="/upload" />
				<WallpaperPage path="/wallpapers/:id" />
			</Router>
		</Suspense>
	);
};

export default AppRouter;
