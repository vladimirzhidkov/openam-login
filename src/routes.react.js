'use strict';

import React from 'react';
import Router from 'react-router';
import App from './components/app.react';
import LoginPage from './components/login-page.react';

var routes = (
    <Router.Route name="app" path="/" handler={App}>
        <Router.DefaultRoute handler={LoginPage}/>
        <Router.Route name="login-page" handler={LoginPage}/>
        <Router.Redirect from="/" to="login-page"/>
    </Router.Route>
);

export default routes;