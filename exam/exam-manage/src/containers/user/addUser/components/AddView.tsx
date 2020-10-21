import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd'
import { _addView } from '@/api/user'
interface IProps {
}
interface IState {

}
class AddView extends Component<IProps, IState> {
    async onFinish(value: any) {
        const result: any = await _addView(value)
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
                <Button style={{ color: 'blue', borderColor: 'blue' }}>添加接口权限</Button>
                <Form

                    ref={(e) => { this.form = e }}
                    name="basic"
                    //@ts-ignore
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        //@ts-ignore
                        name="view_authority_text"
                    >
                        <Input placeholder='请输入视图权限描述' />
                    </Form.Item>
                    <Form.Item
                        //@ts-ignore
                        name="view_id"
                    >
                        <Input placeholder='请输入视图id' />
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

export default AddView;