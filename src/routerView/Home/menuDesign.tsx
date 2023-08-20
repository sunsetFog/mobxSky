import React, {Component} from 'react';

import {Menu} from 'antd';
// antd 图标和导航菜单
import {AppstoreOutlined} from '@ant-design/icons';

import routesArr from '@/router/index';
import history from '@/utils/history';

class menuDesign extends Component {
    state = {
        box1: [{label: '哈哈', key: '/'}],
        listArr: [
            {
                label: '类组件',
                key: 'type1',
                icon: <AppstoreOutlined />,
                children: []
            }
        ]
    };
    constructor(props) {
        super(props);
        let routesArr2 = JSON.parse(JSON.stringify(routesArr));
        routesArr2 = routesArr2[1].children;
        for (let i = 0; i < this.state.listArr.length; i++) {
            let item = this.state.listArr[i];
            for (let k = 0; k < routesArr2.length; k++) {
                let row = routesArr2[k];
                if (item.key == row.menuType) {
                    item.children.push({
                        label: row.name,
                        key: row.path
                    });
                }
            }
        }
        console.log('--listArr--', this.state.listArr);
    }
    menuWay(value) {
        console.log('--menuWay--', value, '---', this);
        history.push(value.key);
    }
    render() {
        const {
            state: {listArr}
        } = this;
        return (
            <section>
                <Menu
                    onClick={this.menuWay.bind(this)}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['type1']}
                    mode='inline'
                    items={listArr}
                />
            </section>
        );
    }
}

export default menuDesign;
