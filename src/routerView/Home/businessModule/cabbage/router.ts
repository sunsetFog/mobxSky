export default {
    name: '白菜',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "cabbage" */ './index'),
};
