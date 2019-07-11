import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routing/AppRouter';
import { login } from './actions/auth';

const store = configureStore();

// const token = JSON.parse(localStorage.getItem('token'));
// if (token) {
// 	store.dispatch(login(token));
// }

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
