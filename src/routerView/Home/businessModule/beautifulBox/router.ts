export default {
    name: '好看tab盒子',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "beautifulBox" */ './index'),
};
