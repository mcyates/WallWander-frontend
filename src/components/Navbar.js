import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';
import { startLogout } from '../actions/auth';

export const Navbar = (props) => {
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(startLogout());
		props.navigate('/');
	};
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/" onClick={logout}>
				Logout
			</Link>
		</nav>
	);
};
