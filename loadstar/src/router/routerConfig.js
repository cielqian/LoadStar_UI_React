import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import SearchResult from '../pages/search';
import SettingManagement from '../pages/setting';
import DashPanel from '../pages/dash';
import LinkManagement from '../pages/link';
import TagManagement from '../pages/tag';

export const routerConfig = [
    {
        path:'/',
        component:Home,
        exact: true,
        auth:true
    },{
        path:'/home',
        component:Home,
        auth:true,
        childrens: [
            {
                path:'/home/setting',
                component:SettingManagement
            },{
                path:'/home/dash',
                component:DashPanel
            },{
                path:'/home/link',
                component:LinkManagement
            },{
                path:'/home/tag',
                component:TagManagement
            },{
                path:'/home/search',
                component:SearchResult
            } 
        ]
    },{
        path:'/login',
        component:Login,
    },{
        path:'/register',
        component:Register,
    }
];

export const flatRouterConfig = [
    {
        path:'/',
        component:Home,
        auth:true
    },{
        path:'/home',
        component:Home,
        auth:true
    },{
        path:'/login',
        component:Login,
    },{
        path:'/register',
        component:Register,
    },
    {
        path:'/home/setting',
        component:SettingManagement
    },{
        path:'/home/dash',
        component:DashPanel
    },{
        path:'/home/link',
        component:LinkManagement
    },{
        path:'/home/tag',
        component:TagManagement
    },{
        path:'/home/search',
        component:SearchResult
    } 
];