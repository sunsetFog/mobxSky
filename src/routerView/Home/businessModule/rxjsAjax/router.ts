export default {
    name: 'rxjsAjax',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "rxjsAjax" */ './index'),
};
