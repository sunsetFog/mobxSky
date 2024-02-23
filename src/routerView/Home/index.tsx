import React, { Component } from 'react';
// 引入图片
import logoimg from '@/assets/logo.png';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '../../redux/reduces/nice.js';

// 引入要大写，这是由 JSX 解析规则决定的
// import MenuDesigns from '~/components/menuDesign';

// import { routes } from '~/router/routes';

import { Routes, Route, Outlet } from 'react-router-dom';
// import { browserHistory } from 'react-router';// 这个路由监听不了，好像是router3版本的
// import { createBrowserHistory, createHashHistory } from 'history';

// connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
// @connect(
//   state => ({nice: state.nice}),
//   dispatch => bindActionCreators(niceActions, dispatch)
// )
import styles from './index.modules.scss';
import MenuDesign from './menuDesign';
import Watermark from '@/@energy/ivoryDesign/web/components/watermark';
import CustomScrollbar from '@/@energy/ivoryDesign/web/components/customScrollbar';

class Nice extends Component {
    state = {
        water: '水',
    };
    // listenFunc = null
    // componentWillMount() {
    //     // 这个不知道为啥用不了，<router history={history}也试过了
    //     // const history = createBrowserHistory();
    //     const history = this.props.history
    //     // console.log("--history-see-1-", history);
    //     this.listenFunc = history.listen((location, action) => {
    //         console.log("--方式1: 类路由监听--", location);
    //     })
    // }

    // componentWillUnmount() {
    //     if (this.listenFunc) {
    //         this.listenFunc();
    //     }
    // }
    // // 前提是用withRouter
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("--方式2: 类路由监听--", prevProps.location, "-2-", prevState, "-3-", this.props.location);
    //     if (this.props.location != prevProps.location) {
    //         console.log("--路由变了--");
    //     }
    // }
    // UNSAFE_componentWillMount() {

    // }
    render() {
        return (
            <div className={styles['home-box']} style={{ paddingTop: 0 }}>
                <aside className={styles['home-left']}>
                    <div className={styles['logoBox']}>
                        <img className={styles['logo-img']} src={logoimg} />
                        <p>爱沃里管理后台</p>
                    </div>
                    <main className={styles.menuBox}>
                        <CustomScrollbar>
                            <MenuDesign></MenuDesign>
                        </CustomScrollbar>
                    </main>
                </aside>

                <div className={styles['home-right']}>
                    <header className={styles['headerBox']}></header>

                    <main className={styles['gourdBox']}>
                        <article className={styles['pen-router-view']}>
                            {/* Outlet支持嵌套路由 */}
                            <Outlet />
                        </article>
                        <Watermark></Watermark>
                    </main>
                </div>
            </div>
        );
    }
}

export default Nice;
