import React, { Component } from 'react';
import { _setIdentityView } from '@/api/user'
import { Form, Button, message, Select } from 'antd'
interface IProps {
    Identity: any
    ViewAuth: any
}
interface IState {

}
class IdSetView extends Component<IProps, IState> {
    async  onFinish(value: any) {
        const result: any = await _setIdentityView(value)
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
                <Button style={{ color: 'blue', borderColor: 'blue' }}>给身份设置视图接口权限</Button>
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
                        name='view_authority_id'
                    >
                        <Select
                            //@ts-ignore
                            placeholder='请选择视图权限'
                        >
                            {
                                this.props.ViewAuth.map((item: any) => {
                                    return <Select.Option key={item.view_authority_id}
                                        value={item.view_authority_id}>{item.view_authority_text}
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

export default IdSetView;