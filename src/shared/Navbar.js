import React from 'react';
import { Link } from '@reach/router';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/">Login</Link>
			<Link to="/">Logout</Link>
		</nav>
	);
};
