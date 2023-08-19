import React from 'react';
import {observer, useLocalObservable} from 'mobx-react-lite';
import {Button} from '@/components';
import styles from './../index.modules.scss';

const HomeOne = () => {
    /**
     * 关于 useLocalObservable
     * 1. useLocalObservable 是 mobx-react-lite 提供的一个钩子函数，用于在 React 函数组件中创建局部的 observable 对象。
     * 2. 可以使局部的状态更加清晰。
     * 3. 代码更加简洁，避免在顶层创建全局的 observable 对象，提高了组件的可维护性和可重用性。
     */
    const store = useLocalObservable(() => ({
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }));

    return (
        <div className={styles['home-one-root']}>
            <h2>使用 useLocalObservable 在 React 函数组件中创建局部的 observable 对象</h2>
            <div className={styles['one-des']}>
                <h2> 关于 useLocalObservable</h2>
                <h3>
                    1. useLocalObservable 是 mobx-react-lite 提供的一个钩子函数，用于在 React 函数组件中创建局部的
                    observable 对象。
                </h3>
                <h3> 2. 可以使局部的状态更加清晰</h3>
                <h3> 3. 代码更加简洁，避免在顶层创建全局的 observable 对象，提高了组件的可维护性和可重用性。</h3>
            </div>
            <div className={styles['one-div']}>
                <div>
                    <h2>Count: {store.count}</h2>
                </div>
                <div>
                    <Button onClick={store.increment}> +1 </Button>
                    <Button onClick={store.decrement}> -1 </Button>
                </div>
            </div>
        </div>
    );
};

export default observer(HomeOne);
