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


上下左右都有一样阴影，注意父盒子要加padding: 10px,不然左，上看不见阴影
方式1
box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);

这个有偏移，效果拉长了
box-shadow: 2px 0 0 2px rgba(24, 144, 255, 0.2), -2px 0 0 2px rgba(24, 144, 255, 0.2), 0 2px 0 2px rgba(24, 144, 255, 0.2), 0 -2px 0 2px rgba(24, 144, 255, 0.2);

方式2
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 上方向阴影
  0px -4px 4px rgba(0, 0, 0, 0.25), 下方向阴影
  -4px 0px 4px rgba(0, 0, 0, 0.25), 左方向阴影
  4px 0px 4px rgba(0, 0, 0, 0.25); 右方向阴影
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
            <br />
            <div className={styles.petalBox}>
                <ul>
                    <li></li>
                    <li></li>
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
            <br />
            <br />
            <div className={styles.catwoman}>
                <input type='text' placeholder='请输入内容' />
            </div>
            <LineTextLine>按钮的外部阴影</LineTextLine>
            <button className={styles.grassBox}>立即下载</button>
            <br />
            <br />
            <button className={`${styles.swanBox} ${styles.swanActive}`}>登陆</button>
            <button className={styles.swanBox}>登陆</button>
            <LineTextLine>导航条的外部阴影</LineTextLine>
            <div className={styles.papaya}></div>
        </section>
    );
}

export default compose(observer)(niceShadow);
