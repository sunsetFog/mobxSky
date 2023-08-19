import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './index.modules.scss';

const Tab = () => {
    return (
        <div className={styles['tab-root']}>
            <div className={styles['tab-wrap']}>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='home/one'>Home One</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>
        </div>
    );
};

export default Tab;
