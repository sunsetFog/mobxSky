export default {
    name: '父子组件',
    menuType: 'type1',
    content: () => import(/* webpackChunkName: "fatherAndSon" */ './father'),
};
