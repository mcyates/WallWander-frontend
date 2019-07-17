import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router';
import { startLogout } from '../actions/auth';

export const Navbar = (props) => {
	const dispatch = useDispatch();
	const isAuthed = useSelector((state) => !!state.auth.id);

	const logout = () => {
		dispatch(startLogout());
		props.navigate('/');
	};

	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			{isAuthed ? (
				<React.Fragment>
					<Link to="/upload">Upload</Link>

					<Link to="/" onClick={logout}>
						Logout
					</Link>
				</React.Fragment>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
};
