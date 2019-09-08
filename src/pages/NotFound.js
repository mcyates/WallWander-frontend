import React, { Suspense } from 'react';
const Navbar = React.lazy(() => import('../components/Navbar'));

export const NotFoundPage = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Navbar />
		<div>404 not Found.</div>;
	</Suspense>
);

export default NotFoundPage;
