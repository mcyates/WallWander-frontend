import React from 'react';

export const UserForm = (props) => {
	const buttonText = props.button;
	return (
		<form className="form" onSubmit={props.submit} method="post">
			<div className="form-box">
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					className="form-input"
					name="email"
					type="email"
					placeholder="hello@email.com"
					onChange={(e) => props.setEmail(e.target.value)}
				/>
			</div>

			<div className="form-box">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					className="form-input"
					name="password"
					type="password"
					placeholder="123abc"
					onChange={(e) => props.setPassword(e.target.value)}
					minLength="8"
				/>
			</div>
			<button className="btn btn-form">{buttonText}</button>
		</form>
	);
};
