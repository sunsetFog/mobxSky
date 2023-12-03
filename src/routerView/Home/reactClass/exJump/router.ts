export default {
    name: '跳转',
    menuType: 'type1',
    content: () => import(/* webpackChunkName: "jump" */ './index'),
};
