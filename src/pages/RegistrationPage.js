import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startRegistration } from '../actions/auth';

const RegistrationPage = (props) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const register = (e) => {
		e.preventDefault();
		const user = { email, name, password };
		dispatch(startRegistration(user));

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
