import React, { Component } from 'react';
import { _EditUser } from '@/api/user'
import { Form, Input, Button, Select, message } from 'antd'
interface IProps {
    Identity: any,
    User: any
}
interface IState {

}
class EditUser extends Component<IProps, IState> {
    form: any = null
    async onFinish(value: any) {
        const result = await _EditUser(value)
        if (result.data.code) {
            message.success(result.data.msg)
        } else {
            message.error(result.data.msg)
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Form
                    ref={(e) => { this.form = e }}
                    name="basic"
                    //@ts-ignore
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        //@ts-ignore
                        name='user_id'
                    >
                        <Select
                            //@ts-ignore
                            placeholder='请选择用户'
                        >
                            {
                                this.props.User.map((item: any) => {
                                    return <Select.Option key={item.user_id}
                                        value={item.user_id}>{item.user_name}
                                    </Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        //@ts-ignore
                        name="user_name"
                        rules={[{ pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/g, message: '用户名字母、数字,长度6-12' }]}
                    >
                        <Input placeholder='请输入用户名' />
                    </Form.Item>

                    <Form.Item
                        //@ts-ignore
                        name="user_pwd"

                        rules={[{ pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*([~!@&%$^\\(\\)#_]).*\\1.*\\1)[A-Z0-9a-z~!@&%$^\\(\\)#_]{8,16}$/g, message: '密码包含特殊符号、数字、字母、大写字母,长度8-16' }]}
                    >
                        <Input.Password placeholder='请输入密码' />
                    </Form.Item>
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

export default EditUser;