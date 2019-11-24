import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FrontendAuth } from './FrontendAuth'
import { routerConfig, flatRouterConfig } from './routerConfig'
import SettingManagement from '../pages/setting';

export default () => (
  <Router>
    <FrontendAuth config={routerConfig} flatConfig={flatRouterConfig} />
    {
      routerConfig.map((route, key) => {
        if (route.exact) {
          return <Route key={key} exact path={route.path}
            render={props => (
              <route.component {...props} routes={route.childrens} />
            )}
          />
        } else {
          return <Route key={key} path={route.path}
            render={props => (
              <route.component {...props} routes={route.childrens} />
            )}
          />
        }
      })
    }
  </Router>
)