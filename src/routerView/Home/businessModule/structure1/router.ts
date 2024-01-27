export default {
    name: '好结构1',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "structure1" */ './index'),
};
