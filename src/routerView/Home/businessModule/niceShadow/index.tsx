import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import LineTextLine from '@/components/lineTextLine/index';

function niceShadow(props: any) {
    useEffect(() => {});
    return (
        <section className={styles.niceShadow}>
            <LineTextLine>白色背景的阴影</LineTextLine>
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
        </section>
    );
}

export default compose(observer)(niceShadow);
