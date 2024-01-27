export default {
    name: '跳转',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "jump" */ './index'),
};
