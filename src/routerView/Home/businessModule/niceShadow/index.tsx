import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import LineTextLine from '@/components/lineTextLine/index';
/*
box-shadow: inset h-shadow v-shadow blur spread color;
inset：内部阴影，不写就是外阴影。
h-shadow：
外部阴影时：右左边框，水平阴影的偏移量。正值是右边框（向右偏移）或 负值是左边框（向左偏移）。
内部阴影时：右左边框，水平阴影的偏移量。正值是左边框（向右偏移）或 负值是右边框（向左偏移）。
v-shadow：
外部阴影时：下上边框，垂直阴影的偏移量。正值是下边框（向下偏移）或 负值是上边框（向上偏移）。
内部阴影时：下上边框，垂直阴影的偏移量。正值是上边框（向下偏移）或 负值是下边框（向上偏移）。
blur：模糊半径。值越大，阴影越模糊
spread：阴影的扩展距离。正值会使阴影变大，负值会使阴影变小。
color：颜色。
*/
function niceShadow(props: any) {
    useEffect(() => {});
    return (
        <section className={styles.niceShadow}>
            <LineTextLine>白色背景的外部阴影</LineTextLine>
            <div className={styles.whiteLegend}>
                <ul>
                    <li>
                        <header></header>
                    </li>
                    <li>
                        <header></header>
                    </li>
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>
            <LineTextLine>输入框的内部阴影</LineTextLine>
            <div className={styles.birdBox}>
                <input type='text' placeholder='请输入内容' />
                <div className={styles.searchBox}>
                    <img src={require('./img/icon_search.png')} />
                </div>
            </div>
            <LineTextLine>按钮的外部阴影</LineTextLine>
            <button className={styles.grassBox}>立即下载</button>
        </section>
    );
}

export default compose(observer)(niceShadow);
