export default {
    name: '红包雨',
    menuType: 'type3',
    content: () => import(/* webpackChunkName: "redEnvelope" */ './index'),
};
