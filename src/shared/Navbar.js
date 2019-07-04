import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export const Navbar = () => {
	const onLogout = () => {
		axios.get('http://localhost:4000/users/logout');
	};
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/" onClick={onLogout}>
				Logout
			</Link>
		</nav>
	);
};
