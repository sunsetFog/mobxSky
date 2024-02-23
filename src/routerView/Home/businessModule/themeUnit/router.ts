export default {
    name: '切换皮肤',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "themeUnit" */ './index'),
};
