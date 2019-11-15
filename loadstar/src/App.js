import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Routes from './router'

axios.defaults.baseURL = "http://localhost:9080";

axios.interceptors.request.use(
  function (config) {
    if(config.url.indexOf('/auth-service/oauth/token') < 0 ){
      let token = localStorage.getItem('TOKEN');
      if(!!token){
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    return config;
  },
  function (err) {
      return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (response) {
    var res = response;
    if (res.status === 200) {
      return Promise.resolve(res.data);        
    }else{
      return Promise.reject(res);
    }
  },
  function (error) {
    return Promise.reject(error); 
  }
);

class App extends Component {
  render() {
    return (
      <Routes></Routes>
    )
  }
}

export default App;
