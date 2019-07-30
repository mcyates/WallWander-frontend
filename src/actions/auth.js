import axios from 'axios';
import { baseUrl } from '../App';

export const login = ( user ) => ( {
	type: 'LOGIN',
	...user
} );

export const startLogin = ( { email, password } ) => {
	return ( dispatch ) => {
		return axios
			.post( `${ baseUrl }/users/login`, {
				email,
				password
			} )
			.then( async ( res ) => {
				const { authorization } = res.headers;

				const user = {
					id: authorization,
					email: res.data.email
				};
				window.localStorage.setItem( 'id', user.id );
				window.localStorage.setItem( 'email', user.email );
				dispatch( login( user ) );
			} )
			.catch( ( e ) => console.error( e ) );
	};
};

export const register = ( user ) => ( {
	type: 'REGISTER',
	...user
} );

export const startRegistration = ( { email, password } ) => {
	return ( dispatch ) => {
		return axios
			.post( `${ baseUrl }/users/register`, {
				email,
				password
			} )
			.then( ( res ) => {
				const { authorization } = res.headers;
				const user = {
					id: authorization,
					email: res.data.email
				};
				window.localStorage.setItem( 'id', user.id );
				window.localStorage.setItem( 'email', user.email );
				dispatch( register( user ) );
			} )
			.catch( ( e ) => console.error( e ) );
	};
};

export const logout = ( email, id ) => ( {
	type: 'LOGOUT',
	email,
	id
} );

export const startLogout = () => {
	return ( dispatch, getState ) => {
		const id = getState().auth.id || localStorage.getItem( 'id' );
		const email = getState().auth.email || localStorage.getItem( 'email' );

		window.localStorage.removeItem( 'id' );
		window.localStorage.removeItem( 'email' );

		dispatch( logout( email, id ) );
	};
};
