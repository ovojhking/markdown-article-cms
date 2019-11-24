import 'idempotent-babel-polyfill';
import '../styles/sass/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Store/init-redux';
import Router from './router';

const App = () =>
	<Provider store={store}>
		<Router />
	</Provider>

ReactDOM.render(<App />, document.getElementById('root'));
