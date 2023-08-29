/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';
import {extend} from 'dayjs';

const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/routerView/home'));

const NotFound = SuspenseLazy(() => import(/* webpackChunkName:"not-found" */ '@/routerView/404'));

const LifeCycle = SuspenseLazy(
    () => import(/* webpackChunkName:"life-cycle" */ '@/routerView/home/reactClass/lifeCycle')
);
const AttrBind = SuspenseLazy(() => import(/* webpackChunkName:"attr-bind" */ '@/routerView/home/reactClass/attrBind'));
const FatherAndSon1 = SuspenseLazy(
    () => import(/* webpackChunkName:"father-and-son" */ '@/routerView/home/reactClass/fatherAndSon/father')
);
const ExJump = SuspenseLazy(() => import(/* webpackChunkName:"ex-jump" */ '@/routerView/home/reactClass/exJump'));
const ExAxios = SuspenseLazy(() => import(/* webpackChunkName:"ex-axios" */ '@/routerView/home/reactClass/exAxios'));
const ExRedux = SuspenseLazy(() => import(/* webpackChunkName:"ex-vuex" */ '@/routerView/home/reactClass/exRedux'));
const Beautiful = SuspenseLazy(
    () => import(/* webpackChunkName:"Beautiful" */ '@/routerView/home/reactClass/beautiful')
);
const Hook1 = SuspenseLazy(() => import(/* webpackChunkName:"hook1" */ '@/routerView/home/hooks/hook1'));
const ReduxToolkit = SuspenseLazy(
    () => import(/* webpackChunkName:"ex-redux" */ '@/routerView/home/hooks/reduxToolkit')
);
const Instruct = SuspenseLazy(() => import(/* webpackChunkName:"instruct" */ '@/routerView/home/hooks/instruct'));
const ExMobx = SuspenseLazy(() => import(/* webpackChunkName:"exMobx" */ '@/routerView/home/hooks/exMobx'));
const FatherAndSon2 = SuspenseLazy(
    () => import(/* webpackChunkName:"exMobx" */ '@/routerView/home/hooks/fatherAndSon/father')
);
const DragonBoatFestival = SuspenseLazy(
    () => import(/* webpackChunkName:"dragonBoatFestival" */ '@/routerView/home/businessModule/dragonBoatFestival')
);
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
                path: '/home/reactClass/lifeCycle',
                element: LifeCycle,
                name: '生命周期',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/attrBind',
                element: AttrBind,
                name: '属性绑定',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/fatherAndSon',
                element: FatherAndSon1,
                name: '父子组件',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/jump/:id',
                element: ExJump,
                name: '跳转',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/exAxios',
                element: ExAxios,
                name: '自定义axios',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/exRedux',
                element: ExRedux,
                name: '状态管理redux',
                menuType: 'type1'
            },
            {
                path: '/home/reactClass/beautiful',
                element: Beautiful,
                name: 'admin页面',
                menuType: 'type1'
            },
            {
                path: '/home/hooks/hook1',
                element: Hook1,
                name: 'hook1',
                menuType: 'type2'
            },
            {
                path: '/home/hooks/reduxToolkit',
                element: ReduxToolkit,
                name: '状态管理@reduxjs/toolkit',
                menuType: 'type2'
            },
            {
                path: '/home/hooks/instruct',
                element: Instruct,
                name: '指令',
                menuType: 'type2'
            },
            {
                path: '/home/hooks/exMobx',
                element: ExMobx,
                name: '状态管理mobx',
                menuType: 'type2'
            },
            {
                path: '/home/hooks/fatherAndSon',
                element: FatherAndSon2,
                name: '父子组件',
                menuType: 'type2'
            }
        ]
    },
    {
        path: '/home/businessModule/dragonBoatFestival',
        element: DragonBoatFestival,
        name: '端午活动',
        menuType: 'type3'
    },
    // 未匹配到页面
    {
        path: '*',
        element: NotFound
    }
];

export default routes;
