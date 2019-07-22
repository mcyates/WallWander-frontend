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
			{isAuthed ? (
				<React.Fragment>
					<div>
						<Link to="/">Home</Link>
						<Link to="/upload">Upload</Link>
					</div>
					<Link to="/" onClick={logout}>
						Logout
					</Link>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div>
						<Link to="/">Home</Link>
					</div>
					<Link to="/login">Login</Link>
				</React.Fragment>
			)}
		</nav>
	);
};
export default Navbar;
