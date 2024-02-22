/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import { Navigate, RouteObject } from 'react-router-dom';
import { extend } from 'dayjs';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/routerView/home'));

const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/routerView/404'));

const DragonBoatFestival = SuspenseLazy(
    () =>
        import(
            /* webpackChunkName:"dragonBoatFestival" */ '@/routerView/home/businessModule/dragonBoatFestival'
        ),
);

let firstArr = [];
let homeArr = [];
const files = require.context('../', true, /\/router\.ts$/);
// console.log('files.keys()===', files.keys());
files.keys().forEach((item) => {
    let filesObj = files(item).default;
    // console.log('context===', filesObj);
    filesObj.path = item.slice(12, -10);
    filesObj.element = SuspenseLazy(filesObj.content);
    delete filesObj.content;
    if (filesObj.superior == '/home') {
        homeArr.push(filesObj);
    }
    if (!filesObj.superior) {
        firstArr.push(filesObj);
    }
});

// const routes: RouteObject[] = [
const routes = [
    ...firstArr,
    {
        path: '/',
        element: <Navigate to='home' />, // 重定向
    },
    {
        path: 'home',
        element: Home,
        children: [
            ...homeArr,
            // {
            //     path: '/home/reactClass/lifeCycle',
            //     element: LifeCycle,
            //     name: '生命周期',
            //     menuType: 'type1',
            // },
        ],
    },
    {
        path: '/home/businessModule/dragonBoatFestival',
        element: DragonBoatFestival,
        name: '端午活动',
        menuType: 'type3',
    },
    // 未匹配到页面
    {
        path: '*',
        element: NotFound,
    },
];

export default routes;
