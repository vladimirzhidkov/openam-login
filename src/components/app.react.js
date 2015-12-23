'use strict';

import React from 'react';
import Router from 'react-router';
import jQuery from 'jquery';

global.jQuery = jQuery;
global.$ = jQuery;

let App = ()=><Router.RouteHandler/>;

export default App;