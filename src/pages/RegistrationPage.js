import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = (e) => {
		e.preventDefault();
		axios
			.post('/user/register', {
				email,
				password
			})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => console.error(e));
	};

	return (
		<form onSubmit={register} method="post">
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
		</form>
	);
};

export default RegistrationPage;
