export default {
    name: 'echarts图表',
    menuType: 'type3',
    content: () => import(/* webpackChunkName: "echartsUnit" */ './index'),
};
