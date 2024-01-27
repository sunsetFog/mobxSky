export default {
    name: '父子组件',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "fatherAndSon" */ './father'),
};
