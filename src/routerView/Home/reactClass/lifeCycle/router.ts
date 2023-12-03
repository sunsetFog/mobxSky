export default {
    name: '生命周期',
    menuType: 'type1',
    content: () => import(/* webpackChunkName: "lifeCycle" */ './index'),
};
