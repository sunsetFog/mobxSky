import * as echarts from 'echarts';

let config = {
    brand: 'ky',
};
export function optionFun(params: any = {}) {
    let colorList: any = {
        ayx: ['#E5C7A4', '#C8A988'],
        leyu: ['#56BDFA', '#4589F8'],
        hth: ['#E5C7A4', '#C8A988'],
        ky: ['#56BDFA', '#4589F8'],
        yx: ['#56BDFA', '#4589F8'],
        jn: ['#91A7F8', '#617DF0'],
    };
    return {
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    {
                        value: params.value,
                        name: 'Search Engine',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: colorList[config.brand][0],
                                },
                                {
                                    offset: 1,
                                    color: colorList[config.brand][1],
                                },
                            ]),
                        },
                    },
                    {
                        value: 100 - params.value,
                        name: 'Direct',
                        itemStyle: {
                            color: '#E3E4E6',
                        },
                    },
                ],
            },
        ],
    };
}
