import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import * as echarts from 'echarts';
import { optionFun } from './pie';
import styles from './index.module.scss';
import ProgressCircle from './ProgressCircle';

function echartsUnit(props: any) {
    const echartBox = useRef<any>();
    const chartInstance = useRef<any>(null);

    // 比例保留小数
    const ellipsisDecimal = (num: any) => {
        return Math.floor(Number(num) * 10000) / 100;
    };

    const dealWidth = (result: any) => {
        console.log('--dealWidth--', result);

        if (!result.commissionLevel) {
            return;
        }

        let paramsObj = {
            value: ellipsisDecimal(result.commissionLevel),
        };

        chartInstance.current.setOption(optionFun(paramsObj));
    };

    useEffect(() => {
        chartInstance.current = echarts.init(echartBox.current);
        dealWidth({ commissionLevel: 0.6 });
        window.addEventListener('resize', () => {
            chartInstance.current.resize();
        });
        return () => {
            window.removeEventListener('resize', () => {
                if (chartInstance.current) {
                    chartInstance.current.dispose();
                }
            });
        };
    }, []);
    return (
        <section>
            <div className={styles.echartBox} ref={echartBox}></div>
            <br />
            <br />
            <ProgressCircle progress={ellipsisDecimal(0.92)}></ProgressCircle>
        </section>
    );
}

export default compose(observer)(echartsUnit);
