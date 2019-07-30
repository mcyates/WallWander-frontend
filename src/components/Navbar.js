import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router';
import { startLogout } from '../actions/auth';

import logo from '../imgs/logo_150x150.png';

export const Navbar = ( props ) => {
	const dispatch = useDispatch();
	const isAuthed = useSelector( ( state ) => !!state.auth.id );

	const logout = () => {
		dispatch( startLogout() );
		props.navigate( '/' );
	};

	return (
		<nav className="navbar">
			{ isAuthed ? (
				<React.Fragment>
					<div className="navbar--content">
						<Link className="navbar--logo" to="/">
							<img src={ logo } classname="logo-img" alt="logo" />
						</Link>
						<Link className="navlink" to="/upload">
							Upload
						</Link>
					</div>
					<Link className="navlink" to="/" onClick={ logout }>
						Logout
					</Link>
				</React.Fragment>
			) : (
					<React.Fragment>
						<div>
							<Link className="navbar--logo" to="/">
								<img src={ logo } classname="logo-img" alt="logo" />

							</Link>
						</div>
						<Link className="navlink" to="/login">
							Login
					</Link>
					</React.Fragment>
				) }
		</nav>
	);
};
export default Navbar;
