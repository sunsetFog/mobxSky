export default {
    name: '自定义axios',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "exAxios" */ './index'),
};
