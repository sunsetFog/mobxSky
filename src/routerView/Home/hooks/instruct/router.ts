export default {
    name: '指令',
    menuType: 'type2',
    content: () => import(/* webpackChunkName: "instruct" */ './index'),
};
