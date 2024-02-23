import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import { Button } from 'antd';
import LineTextLine from '@/components/lineTextLine/index';
import themeStore from '@/utils/themeStore';

function themeUnit(props: any) {
    const { theme_value } = themeStore.data;
    const changeTheme = (type) => {
        console.log('--changeTheme--', type);
        themeStore.setTheme(type);
    };
    return (
        <section className={styles.themeUnit}>
            <div className={styles.saturn}>
                <Button
                    onClick={() => {
                        changeTheme('light');
                    }}
                >
                    白天主题
                </Button>
                <Button
                    onClick={() => {
                        changeTheme('night');
                    }}
                >
                    黑夜主题
                </Button>
                <Button
                    onClick={() => {
                        changeTheme('macaron');
                    }}
                >
                    马卡龙主题
                </Button>
            </div>
            <LineTextLine>切换皮肤后，js变量实现重新渲染</LineTextLine>
            {theme_value == 'light' ? <img src={require('./img/AR.png')} /> : ''}
            {theme_value == 'night' ? <img src={require('./img/INVAGE.png')} /> : ''}
            {theme_value == 'macaron' ? <img src={require('./img/invoice.png')} /> : ''}
            <LineTextLine>切换皮肤后，css改变</LineTextLine>
            <div className={styles.fabulous}></div>
        </section>
    );
}

export default compose(observer)(themeUnit);
