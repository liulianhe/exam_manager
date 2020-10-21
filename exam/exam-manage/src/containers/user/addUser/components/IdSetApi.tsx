import React, { Component } from 'react';
import { _setIdentityApi } from '@/api/user'
import { Form, Button, message, Select } from 'antd'
interface IProps {
    Identity: any
    ApiAuth: any
}
interface IState {

}
class IdSetApi extends Component<IProps, IState> {
    async  onFinish(value: any) {
        const result: any = await _setIdentityApi(value)
        if (result.data.code) {
            message.success(result.data.msg)
        } else {
            message.error(result.data.msg)
        }
    }
    form: any = null;
    render() {
        const { onFinish } = this
        return (
            <div>
                <Button style={{ color: 'blue', borderColor: 'blue' }}>给身份设置api接口权限</Button>
                <Form

                    ref={(e) => { this.form = e }}
                    name="basic"
                    //@ts-ignore
                    onFinish={onFinish}
                >
                    <Form.Item
                        //@ts-ignore
                        name='identity_id'
                    >
                        <Select
                            //@ts-ignore
                            placeholder='请选择身份'
                        >
                            {
                                this.props.Identity.map((item: any) => {
                                    return <Select.Option key={item.identity_id}
                                        value={item.identity_id}>{item.identity_text}
                                    </Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        //@ts-ignore
                        name='api_authority_id'
                    >
                        <Select
                            //@ts-ignore
                            placeholder='请选择api权限'
                        >
                            {
                                this.props.ApiAuth.map((item: any) => {
                                    return <Select.Option key={item.api_authority_id}
                                        value={item.api_authority_id}>{item.api_authority_text}
                                    </Select.Option>
                                })
                            }
                        </Select>
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

export default IdSetApi;