// React应该是底层在调用，得引入
import React, { useState, useEffect, useRef, useContext, createContext, createRef } from 'react';
const DefineContext = createContext();
// import { useHistory } from 'react-router'
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LineTextLine from '@/components/lineTextLine/index';
/*
为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生
*/
function Cosplay(props) {
    const [countOf1, setCount1] = useState(0);
    const [countOf2, setCount2] = useState(0);
    const h1Foo = useRef(createRef());

    /*
        函数副作用，渲染完成
        什么是副作用：
            副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，主作用就是根据数据（state/props）渲染 UI，除此之外都是副作用
        作用：
            为react函数组件提供副作用处理
        执行：
            1. 组件初始渲染
            2. 状态修改，组件更新
            第二个参数（依赖项）：不管是哪个状态引起的更新
            第二个参数（依赖项）：[]空数组   只在首次渲染时执行一次
            第二个参数（依赖项）: [count]   首次渲染和count修改执行
            注意事项
            useEffect有用到状态（依赖数据），依赖项数组中添加状态，否则bug出现
        return 函数  清理副作用执行：
            1. 组件卸载时自动执行
            2. 组件更新时，下一个useEffect副作用函数执行*之前*自动执行
    */
    useEffect(() => {
        // 发送网络请求
        async function fetchData() {
            // const res = await customAxios.get('http://geek.itheima.net/v1_0/channels');
        }
        fetchData();
        if (countOf1 == 0 && countOf2 == 0) {
            console.log(`初始化执行: ${countOf1} --- ${countOf2}`);
        }

        if (countOf1 != 0 && countOf2 != 0) {
            console.log(`副作用，更新后的值2: ${countOf1} --- ${countOf2}`);
        }

        // return () => {
        //     console.log('清理副作用, 比如：清理定时器');
        //     // clearInterval(timerId)
        // };
    }, [countOf1, countOf2]);
    const beanWay = (value) => {
        if (value == 1) {
            setCount1(countOf1 + 1);
        } else if (value == 2) {
            setCount2(countOf2 + 1);
        }
        // 该函数内执行完，就执行定时器，所以还是旧值
        setTimeout(() => dealWith(), 0);
    };
    const dealWith = () => {
        console.log('-dealWith-还是旧值-', countOf1, '---', countOf2);
    };
    const honeyWay = () => {
        console.log('--honeyWay--', h1Foo);
    };

    const [list, setList] = useState([]);

    // console.log('--useContext使用Context数据--', useContext(DefineContext));
    return (
        <div>
            <LineTextLine>修改state数据</LineTextLine>
            <button onClick={() => beanWay(1)}>修改state值: {countOf1}</button>
            <br />
            <br />
            <button onClick={() => beanWay(2)}>修改state值: {countOf2}</button>

            {/*
                特点：修改不会重新渲染，只定义一次
            */}
            <LineTextLine>useRef用于操作DOM，常量</LineTextLine>
            <button onClick={honeyWay} ref={h1Foo}>
                useRef
            </button>
        </div>
    );
}

// 设置属性默认值
Cosplay.defaultProps = {
    colors: '蓝色',
};
// 设置属性类型约束
Cosplay.propTypes = {
    colors: PropTypes.string,
};

function mapStateToProps(params) {
    console.log('-mapStateToProps-', params);
    return {
        state: params.example,
    };
}
// props对象加入了state,dispatch,history属性   history用于跳转
// export default compose(connect(mapStateToProps))(Cosplay);
export default Cosplay;
