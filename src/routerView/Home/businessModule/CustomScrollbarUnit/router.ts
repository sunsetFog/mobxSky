export default {
    name: '自定义滚动条',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "CustomScrollbarUnit" */ './index'),
};
