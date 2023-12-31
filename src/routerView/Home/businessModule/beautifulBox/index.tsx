import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import { tabArr1, tabArr3, tabArr4 } from './constants';

function beautifulBox(props: any) {
    const [tabKey1, setTabOfKey1] = useState(0);
    const [tabKey4, setTabOfKey4] = useState(0);

    const tabWay1 = (index) => {
        setTabOfKey1(index);
    };
    const tabWay4 = (index) => {
        setTabOfKey4(index);
    };
    return (
        <section className={styles.beautifulBox}>
            <section>
                <main className={styles.main1}>
                    <header>
                        {tabArr1.map((item, index) => {
                            return (
                                <label
                                    key={index}
                                    className={
                                        tabKey1 == index
                                            ? styles[item.activeBg]
                                            : styles[item.conventionBg]
                                    }
                                    style={{ left: index * 120, zIndex: tabArr1.length - index }}
                                    onClick={() => {
                                        tabWay1(index);
                                    }}
                                >
                                    {item.title}
                                </label>
                            );
                        })}
                    </header>
                    <article></article>
                </main>
            </section>

            <section>
                <main className={styles.main2}>
                    <header>
                        <ul>
                            {tabArr1.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            tabWay1(index);
                                        }}
                                    >
                                        {tabKey1 == index ? (
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
            </section>

            <section>
                <main className={styles.main3}>
                    <header>
                        <ul>
                            {tabArr3.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            tabWay1(index);
                                        }}
                                    >
                                        <main className={tabKey1 == index ? styles.activeBg : ''}>
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

            <section>
                <main className={styles.main4}>
                    <ul>
                        {tabArr4.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        tabWay4(index);
                                    }}
                                    className={
                                        tabKey4 == index ? styles.activeFlag : styles.normalcy
                                    }
                                >
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                </main>
            </section>
        </section>
    );
}

export default compose(observer)(beautifulBox);
