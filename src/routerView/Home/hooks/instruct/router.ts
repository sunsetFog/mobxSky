export default {
    name: '指令',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "instruct" */ './index'),
};
