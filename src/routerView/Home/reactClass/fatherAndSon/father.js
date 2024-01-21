import React, { Component, createContext, createRef } from 'react';
const DefineContext = createContext();
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// 引入子组件  名字要大写
import Son from './son';
import LineTextLine from '@/components/lineTextLine/index';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class Father extends Component {
    state = {
        hill: '山6',
        water: '水6',
        message: '父组件的数据',
    };

    constructor(props) {
        super(props);
        console.log('--constructor--数据的初始化');
    }

    componentDidMount() {
        console.log('--componentDidMount--渲染完成');
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('--UNSAFE_componentWillReceiveProps--props改变才触发，父子组件传参用');
    }
    peach = () => {
        this.setState({
            hill: '变桃子',
        });
    };
    cartoon = () => {
        this.childTab2.rewardInfo(true);
    };
    childTab2 = createRef();

    render() {
        const { hill, water } = this.state;
        let draw = {
            hill: hill,
            water: water,
            flower: function (value) {
                console.log('子组件数据', value);
            },
        };

        return (
            <section>
                <LineTextLine>父组件</LineTextLine>
                <button onClick={this.peach}>修改父数据</button>
                <br />
                <br />
                <button onClick={this.cartoon}>父调子方法</button>

                <LineTextLine>子组件</LineTextLine>
                {/*
                    hill参数会注入this.props对象里
                    <Son water={12}></Son>
                    {...draw} 简写   注入对象所有
                    Son用不了ref
                    DefineContext.Provider是用来爷爷传孙子的 ???
                */}

                <DefineContext.Provider value={this.state.message}>
                    <Son {...draw} ref={(node) => (this.childTab2 = node)}></Son>
                </DefineContext.Provider>
            </section>
        );
    }
}

export default Father;
