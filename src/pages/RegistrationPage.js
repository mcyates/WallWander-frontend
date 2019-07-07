import React, { useState } from 'react';
import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

const RegistrationPage = (props) => {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const register = (e) => {
		e.preventDefault();
		console.log(email, userName, password);
		axios
			.post(`${baseUrl}/users/register`, {
				email,
				userName,
				password
			})
			.then((res) => {
				console.log(res);
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
				<label htmlFor="name">UserName</label>
				<input
					name="name"
					type="text"
					minLength="3"
					placeholder="foobar"
					onChange={(e) => setUserName(e.target.value)}
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
