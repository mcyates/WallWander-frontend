import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

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
			.then((res) => {
				const { authorization } = res.headers;

				const user = {
					id: authorization,
					email: res.data.email
				};
				dispatch(login(user));
				localStorage.setItem('id', user.id);
				localStorage.setItem('id', user.email);
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
				console.log(res.headers);
				const user = {
					id: authorization,
					email: res.data.email
				};
				localStorage.setItem('id', user.id);
				localStorage.setItem('email', user.email);
				dispatch(register(user));
			})
			.catch((e) => console.error(e));
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
		console.log(email, id);

		window.localStorage.removeItem('id');
		window.localStorage.removeItem('email');

		dispatch(logout(email, id));
	};
};
