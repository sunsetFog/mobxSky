export default {
    name: '生命周期',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "lifeCycle" */ './index'),
};
