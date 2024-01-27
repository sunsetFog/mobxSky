export default {
    name: 'useRequestUnit',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "useRequestUnit" */ './index'),
};
