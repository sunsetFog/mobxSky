export default {
    name: 'admin页面',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "beautiful" */ './index'),
};
