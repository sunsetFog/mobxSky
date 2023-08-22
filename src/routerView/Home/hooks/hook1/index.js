// React应该是底层在调用，得引入
import React, {useState, useEffect, useRef, useContext, createContext} from 'react';
const DefineContext = createContext();
// import { useHistory } from 'react-router'
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useHistory, useNavigate} from 'react-router-dom';
import LineTextLine from '@/components/lineTextLine/index';
/*
为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生
*/
function Cosplay(props) {
    const [count, setCount] = useState(0);
    const h1Foo = useRef(null);

    /*
        函数副作用
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

        console.log(`副作用: ${count}`, h1Foo);
        return () => {
            console.log('清理副作用, 比如：清理定时器');
            // clearInterval(timerId)
        };
    }, [count]);
    const beanWay = () => {
        setCount(9);
    };
    // const history = useHistory();
    const navigate = useNavigate();
    // const {history} = props;
    const jumpWay = () => {
        navigate('/home/hooks/instruct?title=6');
        // history.push('/home/hooks/instruct?title=6');
        // history.push({
        //     pathname: '/home/exRedux',
        //     state: { name: '白菜' },
        // })
    };

    const [list, setList] = useState([]);
    console.log('--props--', props);
    console.log('--useState--', count, '---', list);

    console.log('--useContext使用Context数据--', useContext(DefineContext));
    return (
        <div>
            <LineTextLine>修改state数据</LineTextLine>
            <button onClick={beanWay} ref={h1Foo}>
                修改state
            </button>
            <LineTextLine>跳转</LineTextLine>
            <button onClick={jumpWay}>useHistory跳转</button>
        </div>
    );
}

// 设置属性默认值
Cosplay.defaultProps = {
    colors: '蓝色'
};
// 设置属性类型约束
Cosplay.propTypes = {
    colors: PropTypes.string
};

function mapStateToProps(params) {
    console.log('-mapStateToProps-', params);
    return {
        state: params.example
    };
}
// props对象加入了state,dispatch,history属性   history用于跳转
// export default compose(connect(mapStateToProps))(Cosplay);
export default Cosplay;
