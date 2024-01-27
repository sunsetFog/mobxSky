export default {
    name: '屏页',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "screenPage" */ './index'),
};
