import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FrontendAuth } from './FrontendAuth'
import { routerConfig } from './routerConfig'

export default () => (
  <Router >
    <Switch> 
      <FrontendAuth config={routerConfig} />
    </Switch>
  </Router>
)