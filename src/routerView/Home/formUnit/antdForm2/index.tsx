import React, { Component, InputHTMLAttributes, createRef } from 'react';
import { observer } from 'mobx-react';
import { Checkbox, Input, message, Modal, Spin, Radio, Select, Popover, Button, Form } from 'antd';
import FormService2 from '@/@energy/ivoryDesign/@library/formService2';
import { toRules1 } from './constants';

class antdForm2 extends FormService2 {
    public state = {
        isModalOpen: true,
    };
    public showModal = () => {
        this.setState({
            isModalOpen: true,
        });
    };
    public handleOk = () => {
        this.onValidateForm().then((form) => {
            console.log('--handleOk--', form);
            //     this.setState({
            //         isModalOpen: false,
            //     });
        });
    };
    public handleCancel = () => {
        this.onRest1();
        this.setState({
            isModalOpen: false,
        });
    };
    render(): React.ReactNode {
        const {
            state: { isModalOpen },
        } = this;
        return (
            <section>
                <Button type='primary' onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title='Basic Modal'
                    maskClosable={false}
                    open={isModalOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form
                        name='basic'
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        initialValues={{ username: '小彤' }}
                        ref={this.formRef}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete='off'
                    >
                        <Form.Item label='Username' name='username' rules={toRules1}>
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </section>
        );
    }
}

export default antdForm2;
