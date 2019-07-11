import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';

import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();
		const user = { email, password };
		dispatch(startLogin(user));

		props.navigate('/');
	};

	return (
		<React.Fragment>
			<form onSubmit={login} method="post">
				<div>
					<label htmlFor="email">Email</label>
					<input
						name="email"
						type="email"
						placeholder="foo@bar.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						placeholder="123abc"
						onChange={(e) => setPassword(e.target.value)}
						minLength="8"
					/>
				</div>
				<button>Login</button>
			</form>
			<Link to="/register">Register</Link>
		</React.Fragment>
	);
};

export default LoginPage;
