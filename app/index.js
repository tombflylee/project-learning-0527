import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import MainPage from './views/MainPage/index';
import './style/bundle.scss';


render((
	<Router history={hashHistory}>
		<Route path="/" component={MainPage} />
	</Router>
),document.getElementById('app'))