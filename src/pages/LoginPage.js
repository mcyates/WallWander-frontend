import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';

import { startLogin } from '../actions/auth';
import { UserForm } from '../components/UserForm';

const Navbar = React.lazy(() => import('../components/Navbar'));

const LoginPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();
		const user = { email, password };
		dispatch(startLogin(user));

		// props.navigate('/');
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<UserForm
					button="Login"
					setEmail={setEmail}
					setPassword={setPassword}
					submit={login}
				/>
				<Link className="nav--link" to="/register">
					Register
				</Link>
			</div>
		</React.Fragment>
	);
};

export default LoginPage;
