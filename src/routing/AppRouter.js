import React, { Suspense } from 'react';
import { Router } from '@reach/router';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Profile = React.lazy(() => import('../pages/Profile/Profile'));
const RegistrationPage = React.lazy(() => import('../pages/RegistrationPage'));
const SearchPage = React.lazy(() => import('../pages/SearchPage'));
const Settings = React.lazy(() => import('../pages/Profile/Settings'));
const UploadPage = React.lazy(() => import('../pages/UploadPage'));
const Uploads = React.lazy(() => import('../pages/Profile/Uploads'));
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
				<Settings path="/profile/:id/settings" />
				<SearchPage path="/wallpapers/search/*" />
				<Uploads path="/profile/:id/uploads" />
				<UploadPage path="/upload" />
				<WallpaperPage path="/wallpapers/:id" />
			</Router>
		</Suspense>
	);
};

export default AppRouter;
