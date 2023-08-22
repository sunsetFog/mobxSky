import React, {Component, createContext} from 'react';
const DefineContext = createContext();
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class Grandson extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--constructor--Grandson数据的初始化', this);
    }

    render() {
        return (
            <div>
                <DefineContext.Consumer>
                    {(value) => <div>---{value ? value : '默认，没收到爷爷数据'}---</div>}
                </DefineContext.Consumer>
            </div>
        );
    }
}

export default Grandson;
