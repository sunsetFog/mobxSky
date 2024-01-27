export default {
    name: '属性绑定',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "attrBind" */ './index'),
};
