import 'idempotent-babel-polyfill';
import '../styles/sass/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

const App = () =>
	<Router />


ReactDOM.render(<App />, document.getElementById('root'));
