export default {
    name: 'admin页面',
    menuType: 'type1',
    content: () => import(/* webpackChunkName: "beautiful" */ './index'),
};
