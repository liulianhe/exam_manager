import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd'
import { _addIdentity } from '@/api/user'
interface IProps {

}
interface IState {

}
class AddId extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }

    async  onFinish(value: any) {
        const result: any = await _addIdentity(value)
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
                <Button style={{ color: 'blue', borderColor: 'blue' }}>添加身份</Button>
                <Form

                    ref={(e) => { this.form = e }}
                    name="basic"
                    //@ts-ignore
                    onFinish={onFinish}
                >
                    <Form.Item
                        //@ts-ignore
                        name="identity_text"
                    >
                        <Input placeholder='请输入身份名称' />
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

export default AddId;