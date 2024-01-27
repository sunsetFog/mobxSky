export default {
    name: '跳转',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "toJump" */ './index'),
};
