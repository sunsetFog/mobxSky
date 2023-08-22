import React, {Component, useState} from 'react';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// 引入图片
import logoimg from '@/assets/logo.png';

import {Button, theme, Modal} from 'antd';
import LineTextLine from '@/components/lineTextLine/index';
import styles from './index.modules.scss';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class attrBind extends Component {
    state = {};
    UNSAFE_componentWillMount() {}

    // 退出登录
    exit1 = () => {
        console.log('--this-1-', this);
        Modal.confirm({
            title: '是否退出登录？',
            onOk() {
                console.log('退出登录成功！');
            }
        });
    };
    exit2(event) {
        console.log('--this-2-', this);
        console.log('获取事件对象=', event);
        event.preventDefault(); // 阻止默认行为
    }

    render() {
        // const [count, setCount] = useState(0);
        console.log('--useState--', this);

        //   section是仅有一个最外层标签
        return (
            <section>
                <LineTextLine>class属性</LineTextLine>
                <div className={`${styles.comic} radish`}>class类名</div>
                <LineTextLine>style属性</LineTextLine>
                <div style={{width: '1000px', margin: '0 auto', paddingTop: 20, color: 'red'}}>style样式</div>
                <LineTextLine>src属性</LineTextLine>
                <img style={{width: '40px', height: '40px'}} src={logoimg} />
                <LineTextLine>事件绑定方式1，this指向ok</LineTextLine>
                <Button type='primary' onClick={this.exit1}>
                    返回登录
                </Button>
                <LineTextLine>事件绑定方式2，this指向undefined</LineTextLine>
                <Button type='primary' onClick={this.exit2}>
                    返回登录
                </Button>
                <LineTextLine>事件绑定方式2，改变this指向</LineTextLine>
                <Button
                    type='primary'
                    onClick={(event) => {
                        this.exit2(event);
                    }}
                >
                    返回登录
                </Button>
                <LineTextLine>事件绑定方式2，改变this指向</LineTextLine>
                <Button type='primary' onClick={this.exit2.bind(this)}>
                    返回登录
                </Button>
            </section>
        );
    }
}

export default attrBind;
