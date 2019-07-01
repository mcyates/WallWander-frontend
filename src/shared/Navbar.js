import React from 'react';
import { Link } from '@reach/router';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/users/login">Login</Link>
			<Link to="/users/logout">Logout</Link>
		</nav>
	);
};
