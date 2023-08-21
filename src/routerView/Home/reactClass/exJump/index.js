import React, {Component} from 'react';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

import {Link, NavLink} from 'react-router-dom';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class Jump extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--路由参数在props.match里', this);
    }

    render() {
        return (
            <section>
                {/*
                Link跳转
                不可以起样式名
                编译：<a href='/'>Home</a>
             */}
                <Link to='/home'>Home</Link>
                <br />
                {/*
                NavLink跳转
                可以起样式名
                编译：<a href='/react' className='hurray'>React</a>
             */}
                <NavLink to='/react'>React</NavLink>
            </section>
        );
    }
}

export default Jump;
