export default {
    name: '父子组件',
    menuType: 'type2',
    content: () => import(/* webpackChunkName: "fatherAndSon" */ './father'),
};
