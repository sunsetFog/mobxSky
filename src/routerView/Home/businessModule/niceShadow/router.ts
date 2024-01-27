export default {
    name: '好看的阴影',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "niceShadow" */ './index'),
};
