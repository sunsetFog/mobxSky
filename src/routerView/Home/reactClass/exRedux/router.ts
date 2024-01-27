export default {
    name: '状态管理redux',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "exRedux" */ './index'),
};
