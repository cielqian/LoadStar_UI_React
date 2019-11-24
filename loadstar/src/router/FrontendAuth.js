import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';



export class FrontendAuth extends Component {
  render() {
    const { location, config, flatConfig } = this.props;
    const isLogin = localStorage.getItem('TOKEN');

    if (isLogin) {
      return <div></div>;
    }else{
      return <Redirect to='/login' />
    }


    // const targetRouterConfig = config.find((v) => v.path === pathname);
    // if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
    //     const { component } = targetRouterConfig;
    //     return <Route exact path={pathname} component={component} />
    // }

    // if(isLogin){
    //     // 如果是登陆状态，想要跳转到登陆，重定向到主页
    //     if(pathname === '/login'){
    //         return <Redirect to='/' />
    //     }else{
    //         // 如果路由合法，就跳转到相应的路由
    //         if(targetRouterConfig){
    //             return <Route path={pathname} component={targetRouterConfig.component} />
    //         }else{
    //             // 如果路由不合法，重定向到 404 页面
    //             return <Redirect to='/404' />
    //         }
    //     }
    // }else{
    //     // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
    //     if(targetRouterConfig && targetRouterConfig.auth){
    //         return <Redirect to='/login' />
    //     }else{
    //         // 非登陆状态下，路由不合法时，重定向至 404
    //         return <Redirect to='/404' />
    //     }
    // }
  }
}