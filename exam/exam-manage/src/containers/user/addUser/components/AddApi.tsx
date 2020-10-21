import React, { Component } from 'react';

import { _addApi } from '@/api/user'
import { Form, Input, Button, message } from 'antd'
interface IProps {
}
interface IState {
}
class AddApi extends Component<IProps, IState> {
    async onFinish(value: any) {
        const result: any = await _addApi(value)
        if (result.data.code) {
            message.success(result.data.msg)
        } else {
            message.error(result.data.msg)
        }
    }
    form: any = null
    render() {
        return (
            <div>
                <Button style={{ color: 'blue', borderColor: 'blue' }}>添加api接口权限</Button>
                <Form

                    ref={(e) => { this.form = e }}
                    name="basic"
                    //@ts-ignore
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        //@ts-ignore
                        name="api_authority_text"
                    >
                        <Input placeholder='请输入api接口权限名称' />
                    </Form.Item>
                    <Form.Item
                        //@ts-ignore
                        name="api_authority_url"
                    >
                        <Input placeholder='请输入api接口权限url' />
                    </Form.Item>
                    <Form.Item
                        //@ts-ignore
                        name="api_authority_method"
                    >
                        <Input placeholder='请输入api接口权限方法' />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            确定
                            </Button>
                        <Button style={{ marginLeft: 20 }} type='dashed'
                            onClick={() => {
                                //@ts-ignore
                                this.form.resetFields()
                            }}
                        >
                            重置
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default AddApi;