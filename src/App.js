import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routing/AppRouter';
import { login } from './actions/auth';

export const baseUrl = 'http://localhost:4000';
// export const baseUrl = 'https://wallwander.net/api';

const store = configureStore();

const id = localStorage.getItem('id') || '';
const email = localStorage.getItem('email') || '';
const name = localStorage.getItem('name') || '';

if (id && email) {
	const user = { id, email, name };
	store.dispatch(login(user));
}

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
