import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Routes from './router'

axios.defaults.baseURL = "http://localhost:9080";
axios.interceptors.response.use(
  function (response) {
    var res = response;
    if (res.status == 200) {
      return Promise.resolve(res.data);        
    }else{
      return Promise.reject(res);
    }
  },
  function (error) {
    if (error.response.status === 401) {
      return Promise.reject(error); 
    }
  }
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes></Routes>
      </div>
    )
  }
}

export default App;
