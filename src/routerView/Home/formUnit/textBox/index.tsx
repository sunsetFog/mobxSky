import React, { Component, InputHTMLAttributes, createRef } from 'react';
import { observer } from 'mobx-react';
import { Checkbox, Input, message, Modal, Spin, Radio, Select, Popover } from 'antd';
import styles from './index.modules.scss';
import { CloseOutlined } from '@ant-design/icons';

class textBox extends Component {
    state = {
        // userArr: [],
        userArr: [
            'test1',
            'test2',
            'test3',
            'test4',
            'test5',
            'test6',
            'test7',
            'test8',
            'test9',
            'test10',
            'test11',
            'test12',
            'test13',
            'test14',
            'test15',
            'test16',
            'test17',
            'test18',
            'test19',
            'test20',
            'test21',
        ],
        intWidth: 10,
        inputValue: '',
    };
    public focusWay = () => {
        console.log('--focusWay--');
        this.intRef.current?.focus();
    };
    public contentWidth = (value) => {
        let isSpan = document.createElement('span');
        isSpan.innerHTML = value;
        isSpan.style.fontSize = '12px';
        document.body.appendChild(isSpan);
        let offsetWidth = isSpan.offsetWidth;
        document.body.removeChild(isSpan);
        return offsetWidth;
    };
    public changeWay = (event) => {
        this.setState({
            intWidth: event.target.value.trim()
                ? this.contentWidth(event.target.value.trim()) + 25
                : 10,
            inputValue: event.target.value.trim(),
        });
    };
    public intRef = createRef<HTMLInputElement>();
    public handleKeyDown = (event) => {
        if (event.key === ' ') {
            console.log('空格键被按下');
            this.dealWay();
        } else if (event.key === 'Enter') {
            console.log('回车键被按下');
            this.dealWay();
        }
    };
    public blurWay = () => {
        this.dealWay();
    };
    public dealWay = () => {
        if (!this.intRef.current?.value.trim()) {
            return;
        }
        console.log('--dealWay--', this.intRef.current?.value.trim());
        let arrList = [...this.state.userArr, this.intRef.current?.value.trim()];
        this.setState({
            userArr: this.deduplicationWay(arrList),
        });
        this.setState({
            intWidth: 10,
            inputValue: '',
        });
    };
    public deduplicationWay = (arr = []) => {
        let container = [];
        for (let i = 0; i < arr.length; i++) {
            if (container.indexOf(arr[i]) == -1) {
                container.push(arr[i]);
            }
        }
        return container;
    };
    public deleteWay = (value) => {
        console.log('--deleteWay-1-', value, this.state.userArr);
        let arrBox = this.state.userArr;
        arrBox = arrBox.filter((_item, index) => {
            return index != value;
        });
        console.log('--deleteWay-2-', arrBox);
        this.setState({
            userArr: arrBox,
        });
    };
    public use20Way = (list) => {
        let arrBox = [];
        arrBox = list.filter((_item, index) => {
            return index < 20;
        });
        return arrBox;
    };
    render(): React.ReactNode {
        const { userArr, intWidth, inputValue } = this.state;
        console.log('--deleteWay-3-', userArr);
        return (
            <section style={{ padding: '10px' }}>
                <main className={styles.summer} onClick={this.focusWay}>
                    {userArr.length < 20 ? (
                        <ul>
                            {userArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p className={styles.textApt}>{item}</p>
                                        <p className={styles.iconApt}>
                                            <CloseOutlined
                                                onClick={() => {
                                                    this.deleteWay(index);
                                                }}
                                            />
                                        </p>
                                        <div style={{ clear: 'both' }}></div>
                                    </li>
                                );
                            })}
                            <div className={styles.bird}>
                                <input
                                    type='text'
                                    style={{ width: intWidth + 'px' }}
                                    ref={this.intRef}
                                    value={inputValue}
                                    onChange={this.changeWay}
                                    onKeyDown={this.handleKeyDown}
                                    onBlur={this.blurWay}
                                />
                            </div>
                            <div style={{ clear: 'both' }}></div>
                        </ul>
                    ) : null}
                    {userArr.length >= 20 ? (
                        <ul>
                            {this.use20Way(userArr).map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p className={styles.textApt}>{item}</p>
                                        <p className={styles.iconApt}>
                                            <CloseOutlined
                                                onClick={() => {
                                                    this.deleteWay(index);
                                                }}
                                            />
                                        </p>
                                        <div style={{ clear: 'both' }}></div>
                                    </li>
                                );
                            })}
                            <Popover
                                title={
                                    <div>
                                        用户名
                                        <span
                                            style={{
                                                fontSize: 12,
                                                color: 'rgb(82, 176, 251)',
                                                marginLeft: 2,
                                            }}
                                        >
                                            (共{userArr.length || 0}个)
                                        </span>
                                    </div>
                                }
                                placement='topLeft'
                                content={
                                    <p
                                        style={{
                                            width: 400,
                                            height: 250,
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {userArr?.join(', ')}
                                    </p>
                                }
                            >
                                <li>...</li>
                            </Popover>
                            <div className={styles.bird}>
                                <input
                                    type='text'
                                    style={{ width: intWidth + 'px' }}
                                    ref={this.intRef}
                                    value={inputValue}
                                    onChange={this.changeWay}
                                    onKeyDown={this.handleKeyDown}
                                    onBlur={this.blurWay}
                                />
                            </div>

                            <div style={{ clear: 'both' }}></div>
                        </ul>
                    ) : null}
                </main>
            </section>
        );
    }
}

export default textBox;
