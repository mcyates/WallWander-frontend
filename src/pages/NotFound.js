import React from 'react';
const Navbar = React.lazy(() => import('../components/Navbar'));

export const NotFound = () => (
	<React.Fragment>
		<Navbar />
		<div>404 not Found.</div>;
	</React.Fragment>
);

export default NotFound;
