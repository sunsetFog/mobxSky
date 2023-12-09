import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import LineTextLine from '@/components/lineTextLine/index';
/*

线性渐变
参数1：角度，顺时针旋转
    0deg或to top  从下到上
    45deg 从左下角到右上角
    90deg或to right  从左到右
    180deg或to bottom  从上到下---默认
    270deg或to left  从右到左
参数2：颜色 百分比
参数3：颜色 百分比

多块
background-image: linear-gradient(),linear-gradient(),linear-gradient();

径向渐变--有兼容性
background-image: radial-gradient(shape size at position, color 百分比, ..., );
    shape确定圆的类型:
        ellipse (默认): 指定椭圆形的径向渐变
        circle ：指定圆形的径向渐变
    size渐变的大小
        farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
        closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边
        closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
        farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
    position渐变的位置
        center（默认）：设置中间为径向渐变圆心的纵坐标值。
        top：设置顶部为径向渐变圆心的纵坐标值。
        bottom：设置底部为径向渐变圆心的纵坐标值。
        或值60% 55%
background-image: radial-gradient(circle farthest-side at 60% 55%, red 10%, yellow 60%, green 100%);

*/
function niceGradient(props: any) {
    useEffect(() => {});
    return (
        <section className={styles.niceGradient}>
            <LineTextLine>好看的渐变</LineTextLine>
            <div className={styles.fishBox}></div>
        </section>
    );
}

export default compose(observer)(niceGradient);
