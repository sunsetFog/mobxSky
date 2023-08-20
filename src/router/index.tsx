/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';
import {extend} from 'dayjs';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/routerView/home'));
// const HomeOne = SuspenseLazy(() => import(/* webpackChunkName:"home-one" */ '@/routerView/home/HomeOne'));
const About = SuspenseLazy(
    () => import(/* webpackChunkName:"about" */ /* webpackPrefetch: true */ '@/routerView/About')
);
const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/routerView/404'));

/* webpackPrefetch: true */
/* webpackPreload : true */
const AttrBind = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/routerView/home/reactClass/attrBind'));

// const routes: RouteObject[] = [
const routes = [
    {
        path: '/',
        element: <Navigate to='home' /> // 重定向
    },
    {
        path: 'home',
        element: Home,
        children: [
            {
                path: '/home/reactClass/attrBind',
                element: AttrBind,
                name: '属性绑定',
                menuType: 'type1'
            }
        ]
    },
    {
        path: 'about',
        element: About
    },
    // 未匹配到页面
    {
        path: '*',
        element: NotFound
    }
];

export default routes;
