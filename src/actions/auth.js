import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

export const login = (user) => ({
	type: 'LOGIN',
	user
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
				console.log(res.headers);

				const user = {
					id: authorization,
					email: res.data.email
				};
				dispatch(login(user));
				console.log(res.headers);
				localStorage.setItem('token', user.id);
			})
			.catch((e) => console.error(e));
	};
};

export const register = (user) => ({
	type: 'REGISTER',
	user
});

export const startRegistration = ({ email, name, password }) => {
	return (dispatch) => {
		return axios
			.post(`${baseUrl}/users/register`, {
				email,
				name,
				password
			})
			.then((res) => {
				const { authorization } = res.headers;
				console.log(res.headers);
				const user = {
					id: authorization,
					email: res.data.email,
					name: res.data.name
				};
				console.log(user.id);
				localStorage.setItem('token', user.id);
				dispatch(register(user));
			})
			.catch((e) => console.error(e));
	};
};

export const logout = (token) => ({
	type: 'LOGOUT',
	token
});

export const startLogout = () => {
	return (dispatch, getState) => {
		const token = getState().auth.token || localStorage.getItem('token');
		window.localStorage.removeItem('token');
		dispatch(logout(token));
	};
};
