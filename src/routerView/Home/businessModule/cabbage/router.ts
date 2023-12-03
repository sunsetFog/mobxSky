export default {
    name: '白菜',
    menuType: 'type3',
    content: () => import(/* webpackChunkName: "cabbage" */ './index'),
};
