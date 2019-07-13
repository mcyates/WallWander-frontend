import React from 'react';

export const UserForm = (props) => {
	const buttonText = props.button;
	return (
		<form onSubmit={props.submit} method="post">
			<div>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="hello@email.com"
					onChange={(e) => props.setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="123abc"
					onChange={(e) => props.setPassword(e.target.value)}
					minLength="8"
				/>
			</div>
			<button>{buttonText}</button>
		</form>
	);
};
