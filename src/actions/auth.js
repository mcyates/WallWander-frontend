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
					id: res.data.id,
					email: res.data.email,
					name: res.data.name || '',
					token: authorization
				};
				window.localStorage.setItem('user', JSON.stringify(user));

				navigate(`/profile/${user.id}`);
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
					id: res.data.id,
					email: res.data.email,
					name: '',
					token: authorization
				};
				window.localStorage.setItem('user', JSON.stringify(user));

				navigate(`/profile/${user.id}/settings`);
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

export const logout = (user) => ({
	type: 'LOGOUT',
	...user
});

export const startLogout = () => {
	return (dispatch, getState) => {
		const user = getState().auth || localStorage.getItem('user');

		window.localStorage.removeItem('user');

		dispatch(logout(user));
	};
};
