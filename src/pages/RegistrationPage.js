import React, { useState } from 'react';

const RegistrationPage = () => {
	const userName = useState('');
	const email = useState('');
	const password = useState('');

	return (
		<form method="post">
			<div>
				<label htmlFor="username">UserName</label>
				<input name="username" type="text" placeholder={userName} />
			</div>

			<div>
				<label htmlFor="email">Email</label>
				<input name="email" type="email" placeholder={email} />
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input name="password" type="password" placeholder={password} />
			</div>
		</form>
	);
};

export default RegistrationPage;
