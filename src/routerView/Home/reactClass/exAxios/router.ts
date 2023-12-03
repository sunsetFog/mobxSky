export default {
    name: '自定义axios',
    menuType: 'type1',
    content: () => import(/* webpackChunkName: "exAxios" */ './index'),
};
