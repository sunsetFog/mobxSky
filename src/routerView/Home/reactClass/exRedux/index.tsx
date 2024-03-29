import React, { Component } from 'react';
// 状态管理  bindActionCreators在API文档
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

import { Button } from 'antd';

// 引入vuex   Store在API文档
import Store from '@/reduxStore';

// connect作用：this.props对象里加入state，dispatch，action方法 的属性
// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class ExRedux extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--redux_state数据--', Store.getState());
    }

    changeApple() {
        // 调用action方法
        // 方法一：用this.props
        // this.props.changeApple({ payload: '冰' });

        /*
            方法二：直接到顺序2
            Store.dispatch(this.props.changeApple({ payload: '冰' })); 这个就经过action方法了
         */
        Store.dispatch({ type: 'set_userinfo', payload: '冰' });
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.changeApple.bind(this)}>
                    dispatch修改state
                </Button>
            </div>
        );
    }
}
// 所以页面加withRouter作用：this.props对象里加入history属性，用于跳转  this.props.history.push(value.key);
export default ExRedux;
