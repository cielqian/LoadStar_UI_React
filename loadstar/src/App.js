import React, { Component } from 'react';
import './App.css';
import Routes from './router'

import * as boot from './kernal/boot';
import axios from 'axios';

// boot.launch();

axios.defaults.baseURL = "http://localhost:9080"
// axios.defaults.baseURL = "https://loadstar.top";

axios.interceptors.request.use(
    function (config) {
        if (config.url.indexOf('/auth-service/oauth/token') < 0) {
            let token = localStorage.getItem('TOKEN');
            if (!!token) {
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
            if (!!res.config && res.config.url.indexOf('/oauth/token') > 0) {
                return Promise.resolve(res.data); 
            }
            if (res.data.status === 200) {
                return Promise.resolve(res.data);   
            }else{
                // alert('fail')
                return Promise.reject(res);
            }
        } else if(res.status === 401){
            window.location.href = "/login";
        } else {
            return Promise.reject(res);
        }
    },
    function (error) {
        if (error.message === 'Network Error') {
            alert('服务器断开了')
        }
        else if(error.response == undefined) {
            localStorage.removeItem("TOKEN");
            window.location.href = "/login";
        }
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
