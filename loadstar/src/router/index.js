import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/login';
// import Register from './pages/register';
// import Home from './pages/home';
// import Setting from './pages/setting';

export default () => (
  <Router >
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    {/* <Route path="/register" component={Register} />
    <Route path="/home" component={Home} /> */}
  </Router>
)