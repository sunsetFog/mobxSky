export default {
    name: 'hook1',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "dragonBoat" */ './index'),
};
