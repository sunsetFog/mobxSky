import React, { Component, InputHTMLAttributes, createRef } from 'react';
import { observer } from 'mobx-react';
import { Checkbox, Input, message, Modal, Spin, Radio, Select, Popover, Button, Form } from 'antd';
import FormService2 from '@/@energy/ivoryDesign/@library/formService2';

class antdForm1 extends FormService2 {
    state = {
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
                        // span左的宽，offset是margin-left
                        labelCol={{ span: 6, offset: 1 }}
                        // span右的宽，offset是margin-left
                        wrapperCol={{ span: 12, offset: 1 }}
                        initialValues={{ username: '小白' }}
                        ref={this.formRef}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete='off'
                    >
                        <Form.Item
                            label='Username'
                            name='username'
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            // 修改字段值，使输入不了空格
                            getValueFromEvent={(event: any) =>
                                event.target.value.replace(/\s+/g, '')
                            }
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </section>
        );
    }
}

export default antdForm1;
