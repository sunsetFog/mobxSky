export default {
    name: 'echarts图表',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "echartsUnit" */ './index'),
};
