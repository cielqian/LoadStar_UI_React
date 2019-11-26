import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { FrontendAuth } from './FrontendAuth'
import { routerConfig, flatRouterConfig } from './routerConfig'
import Login from '../pages/login';
import Register from '../pages/register';

export default () => {
  const isLogin = localStorage.getItem('TOKEN');

  if (isLogin) {
    return <Router>
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
  } else {
    return <Router>
        <Route path="/login" component={Login}></Route>
        <Redirect to="/login"></Redirect>
    </Router>
  }
}