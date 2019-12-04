import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { routerConfig, flatRouterConfig } from './routerConfig'
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';

export default () => {
  const isLogin = localStorage.getItem('TOKEN');

  if (isLogin) {
    return <Router>
      <Switch>
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
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  } else {
    return <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Redirect to="/login"></Redirect>
    </Router>
  }
}