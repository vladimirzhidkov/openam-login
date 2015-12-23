'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from './routes.react';

Router.run(routes, function(Handler) {
    ReactDOM.render(<Handler/>, document.getElementById('app'));
});