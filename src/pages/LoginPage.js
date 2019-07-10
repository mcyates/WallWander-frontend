import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from '@reach/router';

import { login } from '../actions/auth';

export const baseUrl = 'http://localhost:4000';

const LoginPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();

		axios
			.post(`${baseUrl}/users/login`, {
				email,
				password
			})
			.then((res) => {
				const { Authorization } = res.headers;
				const user = {
					id: Authorization,
					email: res.data.email
				};
				dispatch(login(user));
				localStorage.setItem('token', Authorization);
			})
			.catch((e) => console.error(e));
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
