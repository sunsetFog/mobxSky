import React, { Component } from 'react';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

import { getDialogConfig, getInviteInfoReq } from './services';

class ExAxios extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--constructor--数据的初始化');
        console.log('父组件传的参数=', this.props);
        // study: http请求
        // customAxios
        //     .get('http://geek.itheima.net/v1_0/channels')
        //     .then((response) => {
        //         console.log('then=', response);
        //     })
        //     .catch((error) => {
        //         console.log('catch=', error);
        //     });
    }
    getDialogConfig = () => {
        getDialogConfig()
            .then((result) => {
                console.log('成功回调！', result);
            })
            .catch((error) => {
                console.log('失败回调！', error);
            });
    };
    getInviteInfoReq = () => {
        getInviteInfoReq()
            .then((result) => {
                console.log('成功回调！', result);
            })
            .catch((error) => {
                console.log('失败回调！', error);
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getDialogConfig}>调get接口</button>
                <br />
                <br />
                <button onClick={this.getInviteInfoReq}>调post接口</button>
            </div>
        );
    }
}

export default ExAxios;
