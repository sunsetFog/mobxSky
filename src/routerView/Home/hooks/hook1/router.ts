export default {
    name: 'hook1',
    menuType: 'type2',
    content: () => import(/* webpackChunkName: "dragonBoat" */ './index'),
};
