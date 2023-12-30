import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import { tabArr1, tabArr3 } from './constants';

function beautifulBox(props: any) {
    const [tabKey, setTabOfKey] = useState(0);

    const tabWay = (index) => {
        setTabOfKey(index);
    };
    return (
        <section className={styles.beautifulBox}>
            <main className={styles.main1}>
                <header>
                    {tabArr1.map((item, index) => {
                        return (
                            <label
                                key={index}
                                className={
                                    tabKey == index
                                        ? styles[item.activeBg]
                                        : styles[item.conventionBg]
                                }
                                style={{ left: index * 120, zIndex: tabArr1.length - index }}
                                onClick={() => {
                                    tabWay(index);
                                }}
                            >
                                {item.title}
                            </label>
                        );
                    })}
                </header>
                <article></article>
            </main>
            <main className={styles.main2}>
                <header>
                    <ul>
                        {tabArr1.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        tabWay(index);
                                    }}
                                >
                                    {tabKey == index ? (
                                        <div className={styles.cartoon}>
                                            <p>{item.title}</p>
                                            <div>
                                                <img src={item.activeIcon} />
                                            </div>
                                        </div>
                                    ) : null}
                                    <main>
                                        <div className={styles.imgBox}>
                                            <img src={item.icon} />
                                        </div>
                                        <p className={styles.title}>{item.title}</p>
                                    </main>
                                </li>
                            );
                        })}
                    </ul>
                </header>
                <article></article>
            </main>
            <main className={styles.main3}>
                <header>
                    <ul>
                        {tabArr3.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        tabWay(index);
                                    }}
                                >
                                    <main className={tabKey == index ? styles.activeBg : ''}>
                                        <div></div>
                                        {item.title}
                                    </main>
                                </li>
                            );
                        })}
                    </ul>
                </header>
                <article></article>
            </main>
        </section>
    );
}

export default compose(observer)(beautifulBox);
