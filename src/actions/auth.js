import axios from 'axios';
import { navigate } from '@reach/router';
import { baseUrl } from '../App';

export const login = (user) => ({
	type: 'LOGIN',
	...user
});

export const startLogin = ({ email, password }) => {
	return (dispatch) => {
		return axios
			.post(`${baseUrl}/users/login`, {
				email,
				password
			})
			.then(async (res) => {
				const { authorization } = res.headers;
				console.log(res.data);

				const user = {
					id: authorization,
					email: res.data.email,
					name: res.data.name || ''
				};
				window.localStorage.setItem('id', user.id);
				window.localStorage.setItem('email', user.email);
				window.localStorage.setItem('name', user.name);
				navigate(`/profile/${authorization}`);
				dispatch(login(user));
			})
			.catch((e) => console.error(e));
	};
};

export const register = (user) => ({
	type: 'REGISTER',
	...user
});

export const startRegistration = ({ email, password }) => {
	return (dispatch) => {
		return axios
			.post(`${baseUrl}/users/register`, {
				email,
				password
			})
			.then((res) => {
				const { authorization } = res.headers;
				console.log(res);
				const user = {
					id: authorization,
					email: res.data.email,
					name: ''
				};
				window.localStorage.setItem('id', user.id);
				window.localStorage.setItem('email', user.email);
				navigate(`/profile/${authorization}`);
				dispatch(register(user));
			})
			.catch((e) => console.error(e));
	};
};

// Set username

export const setName = (user) => ({
	type: 'SETNAME',
	...user
});

export const startSetName = (user) => {
	const { id, email, name } = user;
	return (dispatch) => {
		return axios
			.post(
				`${baseUrl}/users/name`,
				{
					name,
					email
				},
				{
					headers: { authorization: id }
				}
			)
			.then((res) => {
				console.log(res);
				const user = {
					id,
					email,
					name
				};
				window.localStorage.setItem('name', user.name);
				dispatch(setName(user));
			});
	};
};

export const logout = (email, id) => ({
	type: 'LOGOUT',
	email,
	id
});

export const startLogout = () => {
	return (dispatch, getState) => {
		const id = getState().auth.id || localStorage.getItem('id');
		const email = getState().auth.email || localStorage.getItem('email');

		window.localStorage.removeItem('id');
		window.localStorage.removeItem('email');

		dispatch(logout(email, id));
	};
};
