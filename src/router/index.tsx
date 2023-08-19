/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/view/Home'));
const HomeOne = SuspenseLazy(() => import(/* webpackChunkName:"home-one" */ '@/view/Home/HomeOne'));
const About = SuspenseLazy(() => import(/* webpackChunkName:"about" */ /* webpackPrefetch: true */ '@/view/About'));
const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/view/NotFound'));

/* webpackPrefetch: true */
/* webpackPreload : true */

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='home' /> // 重定向
    },
    {
        path: 'home',
        element: Home,
        children: [
            // 嵌套路由
            {
                path: 'one',
                element: HomeOne
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
