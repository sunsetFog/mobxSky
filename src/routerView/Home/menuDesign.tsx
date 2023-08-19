import React, {Component} from 'react';

import {Menu} from 'antd';
// antd 图标和导航菜单
import {AppstoreOutlined} from '@ant-design/icons';

class menuDesign extends Component {
    state = {
        box1: [{label: '哈哈', key: '/'}],
        listArr: []
    };
    constructor(props) {
        super(props);
        console.log('--6---', this.state.box1);
        this.state.listArr = [
            {
                label: '类组件',
                key: 'sub1',
                icon: <AppstoreOutlined />,
                children: this.state.box1
            }
        ];
    }
    menuWay(value) {}
    render() {
        const {
            state: {listArr}
        } = this;
        return (
            <section>
                <Menu
                    onClick={this.menuWay.bind(this)}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode='inline'
                    items={listArr}
                />
            </section>
        );
    }
}

export default menuDesign;
