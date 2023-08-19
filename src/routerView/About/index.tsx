import React from 'react';
import {observer} from 'mobx-react-lite';
// import {useStores} from '@/store';

import styles from './index.modules.scss';

const About = () => {
    // const {globalStore} = useStores();

    return (
        <div className={styles['about-root']}>
            <p>Hello About</p>
        </div>
    );
};

export default observer(About);
