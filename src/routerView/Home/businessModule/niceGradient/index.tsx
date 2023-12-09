import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import LineTextLine from '@/components/lineTextLine/index';

function niceGradient(props: any) {
    useEffect(() => {});
    return (
        <section className={styles.niceGradient}>
            <LineTextLine>好看的渐变</LineTextLine>
        </section>
    );
}

export default compose(observer)(niceGradient);
