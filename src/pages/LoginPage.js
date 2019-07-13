import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';

import { startLogin } from '../actions/auth';
import { UserForm } from '../components/UserForm';

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
			<UserForm
				button="Login"
				setEmail={setEmail}
				setPassword={setPassword}
				submit={login}
			/>
			<Link to="/register">Register</Link>
		</React.Fragment>
	);
};

export default LoginPage;
