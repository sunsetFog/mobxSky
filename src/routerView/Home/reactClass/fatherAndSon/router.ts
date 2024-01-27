export default {
    name: '父子组件',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "fatherAndSon" */ './father'),
};
