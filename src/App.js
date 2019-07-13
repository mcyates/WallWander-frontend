import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routing/AppRouter';
import { login } from './actions/auth';

const store = configureStore();

const id = localStorage.getItem('id') || '';
const email = localStorage.getItem('email') || '';

if (id && email) {
	store.dispatch(login(id, email));
}

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
