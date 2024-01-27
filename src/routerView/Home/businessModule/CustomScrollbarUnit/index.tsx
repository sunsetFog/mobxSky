import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import CustomScrollbar from '@/@energy/ivoryDesign/web/components/customScrollbar';
import styles from './index.module.scss';

function CustomScrollbarUnit() {
    return (
        <section className={styles.CustomScrollbarUnit}>
            <CustomScrollbar>
                <div className={styles.contentBox}></div>
            </CustomScrollbar>
        </section>
    );
}

export default compose(observer)(CustomScrollbarUnit);
