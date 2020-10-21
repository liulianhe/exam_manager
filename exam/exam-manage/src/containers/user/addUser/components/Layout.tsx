import React, { Component } from 'react';
import { Layout, Button, message } from 'antd'
import Form from './Form'

import { _addUser, _EditUser } from '@/api/user'
import { layout } from '../config/layout'
interface IProps {
    addUserForm: any[],
    change: Function,
    editUserForm: any[]
    addIdFrom: any
    addApiFrom: any[]
    addViewFrom: any[]
    idSetApiFrom: any[]
    idSetViewFrom: any[]
}
interface IState {
    num: number
}
class myLayout extends Component<IProps, IState> {
    state = {
        num: 0
    }
    onFinish(result: any) {
        if (result.code) {
            message.success(result.msg)

            this.props.change()
        } else {
            message.error(result.msg)
        }
    }
    render() {
        const { Sider } = Layout
        const { num } = this.state
        const { editUserForm, addUserForm } = this.props
        return (
            <>
                <Layout>
                    {
                        layout.map((item: any, index: number) => {
                            return <Layout className='layrow' key={index + 'layout'}>
                                {
                                    item.list.map((ite: any, index: number) => {
                                        return <Sider width='33.33%' key={index + 'sider'}>
                                            {
                                                ite.flag
                                                    ?
                                                    <div>
                                                        <Button
                                                            className={this.state.num === 0 ? 'addUseractive' : ''}
                                                            onClick={() => {
                                                                this.setState({
                                                                    num: 0
                                                                })
                                                            }}>添加用户</Button>
                                                        <Button
                                                            className={this.state.num === 1 ? 'addUseractive' : ''}
                                                            onClick={() => {
                                                                this.setState({
                                                                    num: 1
                                                                })
                                                            }}>更新用户</Button>
                                                        {
                                                            num === 0
                                                                ? <Form formList={addUserForm} onFinish={(result: any) => this.onFinish(result)} req={_addUser} />
                                                                : <Form formList={editUserForm} onFinish={(result: any) => this.onFinish(result)} req={_EditUser} />
                                                        }

                                                    </div>
                                                    : <Form
                                                        formList={(this.props as any)[ite.formList]}
                                                        onFinish={(result: any) => this.onFinish(result)}
                                                        req={ite.req} />
                                            }
                                        </Sider>
                                    })
                                }
                            </Layout>
                        })
                    }
                </Layout>
            </>
        );
    }
}

export default myLayout;