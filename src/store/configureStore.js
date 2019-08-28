import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import imageReducer from '../reducers/imageReducer';
import searchReducer from '../reducers/searchReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			images: imageReducer,
			search: searchReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
