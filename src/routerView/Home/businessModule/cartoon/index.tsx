import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import style from './index.module.scss';
import Circle from './components/circle';
const baseGroupData = [
    {
        id: '0',
        percent: 52,
        count: 0,
        maximum: 60,
        countTitle: 'current speed',
        title: '平均存款时间',
        subtitle: 'Average time of Deposit',
        unit: '秒',
        key: 'deposit',
    },
    {
        id: '1',
        percent: 42,
        count: 0,
        maximum: 31,
        countTitle: 'totally amount',
        title: '合作游戏平台',
        subtitle: 'Gaming Provider Partners',
        unit: '家',
        key: 'company',
    },
];

function cartoon(props: any) {
    const [isStartAnimation, setIsStartAnimation] = useState(false);
    const [groupData, setGroupOfData] = useState(baseGroupData);
    const animationFun = () => {
        const copy_data = JSON.parse(JSON.stringify(baseGroupData));
        // @ts-ignore
        groupData.map((_item, index) => {
            let animationer: any;
            const footAnimation = () => {
                const tempGroup: any = [...copy_data];
                const currentCount = tempGroup[index].count;
                const currentMax = tempGroup[index].maximum;
                tempGroup[index].count =
                    currentCount + Math.ceil((currentMax - currentCount) / 60 / 1);
                setGroupOfData(tempGroup);
                if (currentCount >= currentMax) {
                    setIsStartAnimation(false);
                    window.cancelAnimationFrame(animationer);
                } else {
                    // 这里调用footAnimation循环了
                    animationer = window.requestAnimationFrame(footAnimation);
                }
            };
            footAnimation();
        });
    };
    const playWay = () => {
        setIsStartAnimation(true);
        animationFun();
    };
    useEffect(() => {}, []);
    return (
        <section className={style.cartoon}>
            <div className={style.atmosphere}>
                <ul>
                    {groupData.map((item, index) => {
                        return (
                            <li className={style.rainbow} key={index}>
                                <div className={style.circle_progress_wraper}>
                                    <Circle
                                        id={item.id}
                                        percent={item.percent}
                                        // foreColor={'#00BFFF'}
                                        // endForceColor={'#218BFF'}
                                        foreColor={'#41EDE2'}
                                        endForceColor={'#1F99FF'}
                                        bgColor={'transparent'}
                                        width={128}
                                        height={128}
                                        time={4000}
                                        lineWidth={8}
                                        lineCap={'round'}
                                        start={isStartAnimation}
                                    ></Circle>
                                </div>
                                <div className={style.countNum}>{item.count}</div>
                                <p className={style.p1}>{item.unit}</p>
                                <p className={style.p2}>{item.title}</p>
                            </li>
                        );
                    })}
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

            <div className={style.fabulous}>
                <button onClick={playWay}>开始动画</button>
            </div>
        </section>
    );
}

export default compose(observer)(cartoon);
