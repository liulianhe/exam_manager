import React, { Component } from 'react';
import { Layout, Button } from 'antd'

import AddId from './AddId'
import AddApi from './AddApi'
import AddUser from './AddUser'
import AddView from './AddView'
import EditUser from './EditUser'
import IdSetApi from './IdSetApi'
import IdSetView from './IdSetView'
interface IProps {
    ApiAuth: any[],
    IdentityApi: any[],
    IdentityView: any[],
    User: any[],
    Identity: any[],
    ViewAuth: any[]
}
interface IState {
    num: number
}
class myLayout extends Component<IProps, IState> {
    state = {
        num: 0
    }
    render() {
        const { Sider } = Layout
        const { num } = this.state
        const { ApiAuth, Identity, User, ViewAuth } = this.props
        return (
            <>
                <Layout>
                    <Layout className='layrow'>
                        <Sider width='33.33%'>
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
                                    ? <AddUser Identity={Identity} />
                                    : <EditUser Identity={Identity} User={User} />
                            }

                        </Sider>
                        <Sider width='33.33%'>
                            <AddId />
                        </Sider>
                        <Sider width='33.33%'>
                            <AddApi />
                        </Sider>
                    </Layout>
                    <Layout className='layrow'>
                        <Sider width='33.33%'>
                            <AddView />
                        </Sider>
                        <Sider width='33.33%'>
                            <IdSetApi ApiAuth={ApiAuth} Identity={Identity} />
                        </Sider>
                        <Sider width='33.33%'>
                            <IdSetView ViewAuth={ViewAuth} Identity={Identity} />
                        </Sider>
                    </Layout>
                </Layout>
            </>
        );
    }
}

export default myLayout;