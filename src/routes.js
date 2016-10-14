import React from 'react';
import {render} from 'react-dom';

import {Router, 
        Route, 
        IndexRoute, 
        Link, 
        browserHistory } from 'react-router'

import HomePage from './HomePage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
  </Router>
);
