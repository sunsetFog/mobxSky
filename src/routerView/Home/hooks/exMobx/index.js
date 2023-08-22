import React, {useState, useEffect, useRef, useContext} from 'react';

// 导入中间件链接mobx react 完成响应式变化
import {observer} from 'mobx-react-lite';
// 非模块化封装
import {counterStore1} from '@/mobxStore/noModularity/counter';
// 模块化封装
import {useStore} from '@/mobxStore/index';
import LineTextLine from '@/components/lineTextLine/index';

function exMobx1(props) {
    console.log('--props对象--', props);
    const {counterStore2} = useStore(); // 解构赋值
    console.log('--counterStore2--', counterStore2);

    return (
        <div>
            <LineTextLine>非模块化封装</LineTextLine>
            <LineTextLine leftCakes={true}>使用store数据</LineTextLine>
            {counterStore1.count}
            <LineTextLine leftCakes={true}>调用action方法</LineTextLine>
            <button onClick={counterStore1.setCount}>调用action方法</button>
            <LineTextLine leftCakes={true}>计算属性</LineTextLine>
            数组转字符串：{counterStore1.filterList.join('-')}
            <br />
            <br />
            <button onClick={counterStore1.setList}>调用action方法，修改数组</button>
            <LineTextLine>模块化封装</LineTextLine>
            <LineTextLine leftCakes={true}>使用store数据</LineTextLine>
            {counterStore2.count}
            <LineTextLine leftCakes={true}>调用action方法</LineTextLine>
            <button onClick={counterStore2.setCount}>调用action方法</button>
        </div>
    );
}

// 3、包裹App
export default observer(exMobx1);
