import React, { useState } from 'react';
import { emailValidation, passwordValidation } from './UserValidation';

export const UserForm = (props) => {
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const onEmailChange = (e) => {
		setEmailError(emailValidation(e.target.value));
		if (emailError) return;
		props.setEmail(e.target.value);
	};
	const onPassChange = (e) => {
		setPasswordError(passwordValidation(e.target.value));
		if (passwordError) {
			if (passwordError === 'Please enter a password.') {
				props.setPassword('');
			}
		}
		props.setPassword(e.target.value);
	};
	const buttonText = props.button;

	return (
		<form className="form" onSubmit={props.submit} method="post">
			<div className="form-box">
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					className="form-input"
					id="email"
					name="email"
					onChange={onEmailChange}
					placeholder="hello@email.com"
					required
					type="email"
					value={props.email}
				/>
				{emailError && <p className="form-error">{emailError}</p>}
			</div>

			<div className="form-box">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					className="form-input"
					id="password"
					minLength="8"
					name="password"
					onChange={onPassChange}
					placeholder="123abc"
					required
					type="password"
					value={props.password}
				/>
				{passwordError && <p className="form-error">{passwordError}</p>}
			</div>
			<button type="submit" className="btn btn-form">
				{buttonText}
			</button>
		</form>
	);
};

export default UserForm;
