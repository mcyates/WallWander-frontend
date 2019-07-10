import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { register } from '../actions/auth';

export const baseUrl = 'http://localhost:4000';

const RegistrationPage = (props) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const register = (e) => {
		e.preventDefault();
		axios
			.post(`${baseUrl}/users/register`, {
				email,
				name,
				password
			})
			.then((res) => {
				const { Authorization } = res.headers;
				const user = {
					id: Authorization,
					email: res.data.email,
					name: res.data.name
				};
				dispatch(register(user));
				localStorage.setItem('user', user);
			})
			.catch((e) => console.error(e));
		props.navigate('/');
	};

	return (
		<form onSubmit={register} method="post">
			<div>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="hello@email.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="name">Username</label>
				<input
					name="name"
					type="text"
					minLength="3"
					placeholder="foobar"
					onChange={(e) => setName(e.target.value)}
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
			<button>Register</button>
		</form>
	);
};

export default RegistrationPage;
