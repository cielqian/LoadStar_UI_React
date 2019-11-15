import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';

export const routerConfig = [
    {
        path:'/',
        component:Home,
        auth:true,
    },{
        path:'/home',
        component:Home,
        auth:true,
    },
    {
        path:'/Home',
        component:Home,
        auth:true,
    },{
        path:'/login',
        component:Login,
    },{
        path:'/register',
        component:Register,
    }
];