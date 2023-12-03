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

const files = require.context('../', true, /\/router\.ts$/);
console.log('files.keys()===', files.keys());
let secondArr = [];
files.keys().forEach((item) => {
    let filesContent = files(item).default;
    console.log('context===', filesContent);
    filesContent.path = item.slice(12, -10);
    filesContent.element = SuspenseLazy(filesContent.content);
    secondArr.push(filesContent);
});
console.log('secondArr===', secondArr);

// const routes: RouteObject[] = [
const routes = [
    {
        path: '/',
        element: <Navigate to='home' />, // 重定向
    },
    {
        path: 'home',
        element: Home,
        children: [
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

for (let i = 0; i < routes.length; i++) {
    let item = routes[i];
    if (item.path == 'home') {
        item.children = [...item.children, ...secondArr];
    }
}

export default routes;
