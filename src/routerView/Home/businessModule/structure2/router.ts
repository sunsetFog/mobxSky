export default {
    name: '好结构2',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "structure2" */ './index'),
};
