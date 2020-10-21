import React, { } from 'react'
import { Form, Input, Button, Select } from 'antd'
interface IProps {
    formList: any[]
    onFinish: Function
    req: Function
}
function MyForm(props: IProps) {
    let form: any = null
    const { formList, req } = props
    const onFinish = async (value: any) => {
        const result: any = await req(value)
        props.onFinish(result.data)
    }
    return <Form
        ref={(e) => { form = e }}
        name="basic"
        //@ts-ignore
        onFinish={onFinish}
    >
        {
            formList.map((item: any, index: number) => {
                return <Form.Item
                    key={item.name + index}
                    //@ts-ignore
                    name={item.name}
                    rules={item.rules || []}
                >
                    {
                        item.select
                            ? <Select
                                //@ts-ignore
                                placeholder={item.placeholder}
                            >
                                {
                                    item.list.map((ite: any) => {
                                        return <Select.Option
                                            key={ite[item.key]}
                                            value={ite[item.key]}>
                                            {ite[item.text]}
                                        </Select.Option>
                                    })
                                }
                            </Select>
                            : item.pwd
                                ? <Input.Password placeholder={item.placeholder} />
                                : <Input placeholder={item.placeholder} />
                    }
                </Form.Item>
            })
        }

        <Form.Item>
            <Button type="primary" htmlType="submit">
                确定
            </Button>
            <Button style={{ marginLeft: 20 }} type='dashed'
                onClick={() => {
                    //@ts-ignore
                    form.resetFields()
                }}
            >
                重置
            </Button>
        </Form.Item>
    </Form>
}
export default MyForm;