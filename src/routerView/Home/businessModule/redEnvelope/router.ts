export default {
    name: '红包雨',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "redEnvelope" */ './index'),
};
