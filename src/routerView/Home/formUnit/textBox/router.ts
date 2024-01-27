export default {
    name: '好文本框',
    menuType: 'type4',
    superior: '/home',
    content: () => import(/* webpackChunkName: "textBox" */ './index'),
};
