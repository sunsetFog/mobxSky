import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import { tabArr, contentArr } from './constants';

function structure2(props: any) {
    const [tabKey, setTabOfKey] = useState(0);
    const tabWay = (index) => {
        setTabOfKey(index);
    };
    return (
        <section className={styles.structure2}>
            <main className={styles.venus}>
                <article>
                    <aside>
                        <div className={styles.cartoon}>
                            <div className={styles.mercury}>
                                <div>财务中心</div>
                                <label>
                                    <i></i>
                                </label>
                            </div>
                            <div className={styles.rainbow}>
                                <ul>
                                    {tabArr.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    tabKey == index
                                                        ? styles.activeLi
                                                        : styles.normalcy
                                                }
                                                onClick={() => {
                                                    tabWay(index);
                                                }}
                                            >
                                                {tabKey == index ? (
                                                    <img src={item.icon} />
                                                ) : (
                                                    <img src={item.activeIcon} />
                                                )}

                                                {item.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.cartoon}>
                            <div className={styles.mercury}>
                                <div>个人中心</div>
                                <label>
                                    <i></i>
                                </label>
                            </div>
                            <div className={styles.rainbow}>
                                <ul>
                                    {tabArr.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    tabKey == index
                                                        ? styles.activeLi
                                                        : styles.normalcy
                                                }
                                                onClick={() => {
                                                    tabWay(index);
                                                }}
                                            >
                                                {tabKey == index ? (
                                                    <img src={item.icon} />
                                                ) : (
                                                    <img src={item.activeIcon} />
                                                )}

                                                {item.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <main>
                        <article className={styles.butterfly}></article>
                        <article className={styles.cosplay}></article>
                    </main>
                </article>
            </main>
        </section>
    );
}

export default compose(observer)(structure2);
