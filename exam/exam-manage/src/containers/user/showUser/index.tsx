import React, { Component } from 'react';
import { Button } from 'antd'
import { _getApiAuth, _getIdentityApi, _getIdentityView, _getUser, _getIdentity, _getViewAuth } from '@/api/user'
import Table from './components/Table'
class showUser extends Component {
    state = {
        ApiAuth: [],
        IdentityApi: [],
        IdentityView: [],
        User: [],
        Identity: [],
        ViewAuth: [],
        tableList: [],
        tableColumns: [],
        title: '',
        navList: [
            {
                title: '用户数据',
                type: 'user'
            },
            {
                title: '身份数据',
                type: 'identity'
            },
            {
                title: 'api接口数据',
                type: 'apiAuth'
            },
            {
                title: '身份和api接口关系',
                type: 'identityApi'
            },
            {
                title: '视图接口权限',
                type: 'viewAuth'
            },
            {
                title: '身份和视图权限的关系',
                type: 'identityView'
            },

        ]
    }
    componentDidMount() {
        this.getAllUserList()
    }
    async getAllUserList() {
        let ApiAuth = await _getApiAuth()
        let IdentityApi = await _getIdentityApi()
        let IdentityView = await _getIdentityView()
        let User = await _getUser()
        let Identity = await _getIdentity()
        let ViewAuth = await _getViewAuth()
        this.setState({
            ApiAuth: ApiAuth.data.data,
            IdentityApi: IdentityApi.data.data,
            IdentityView: IdentityView.data.data,
            User: User.data.data,
            Identity: Identity.data.data,
            ViewAuth: ViewAuth.data.data
        }, () => {
            this.setTableList('user')
        })
    }
    setTableList(type: any) {
        let columns = []
        switch (type) {
            case 'user':
                columns = [
                    {
                        title: '用户名',
                        dataIndex: 'user_name',
                        key: 'user_name',
                    },
                    {
                        title: '密码',
                        dataIndex: 'user_pwd',
                        key: 'user_pwd',
                    },
                    {
                        title: '身份',
                        dataIndex: 'identity_text',
                        key: 'identity_text',
                    }
                ]
                this.setTable(this.state.User, columns, '用户数据')
                break;
            case 'user':
                break;
            case 'apiAuth':
                columns = [
                    {
                        title: '请求描述',
                        dataIndex: 'api_authority_text',
                        key: 'api_authority_text',
                    },
                    {
                        title: '请求地址',
                        dataIndex: 'api_authority_url',
                        key: 'api_authority_url',
                    },
                    {
                        title: '请求方式',
                        dataIndex: 'api_authority_method',
                        key: 'api_authority_method',
                    }
                ]
                this.setTable(this.state.ApiAuth, columns, 'api接口数据')
                break;
            case 'identityApi':
                columns = [
                    {
                        title: '身份',
                        dataIndex: 'identity_text',
                        key: 'identity_text',
                    },
                    {
                        title: '请求描述',
                        dataIndex: 'api_authority_text',
                        key: 'api_authority_text',
                    },
                    {
                        title: '请求地址',
                        dataIndex: 'api_authority_url',
                        key: 'api_authority_url',
                    },
                    {
                        title: '请求方式',
                        dataIndex: 'api_authority_method',
                        key: 'api_authority_method',
                    }
                ]
                this.setTable(this.state.IdentityApi, columns, '身份和api接口关系')
                break;
            case 'identityView':
                columns = [
                    {
                        title: '身份',
                        dataIndex: 'identity_text',
                        key: 'identity_text',
                    },
                    {
                        title: '视图描述',
                        dataIndex: 'view_authority_text',
                        key: 'view_authority_text',
                    },
                    {
                        title: '视图id',
                        dataIndex: 'view_id',
                        key: 'view_id',
                    }
                ]
                this.setTable(this.state.IdentityView, columns, '身份和视图权限的关系')
                break;
            case 'identity':
                columns = [
                    {
                        title: '身份',
                        dataIndex: 'identity_text',
                        key: 'identity_text',
                    }
                ]
                this.setTable(this.state.Identity, columns, '身份数据')
                break;
            case 'viewAuth':
                columns = [
                    {
                        title: '视图描述',
                        dataIndex: 'view_authority_text',
                        key: 'view_authority_text',
                    },
                    {
                        title: '视图id',
                        dataIndex: 'view_id',
                        key: 'view_id',
                    }
                ]
                this.setTable(this.state.ViewAuth, columns, '视图接口权限')
                break;
            default:
                break;
        }
    }
    setTable(list: any, columns: any, title: string) {
        this.setState({
            tableList: list.map((item: any) => {
                item.id = Math.random() * 100
                return item
            }),
            tableColumns: columns,
            title
        })
    }
    render() {
        return (
            <div className='showUser'>
                <h2>用户展示</h2>
                <nav>
                    {
                        this.state.navList.map((item: any) => {
                            return <Button key={item.title}
                                onClick={() => { this.setTableList(item.type) }}
                                type='dashed'>{item.title}</Button>
                        })
                    }
                </nav>
                <h3>{this.state.title}</h3>
                <Table data={this.state.tableList}
                    columns={this.state.tableColumns} />
            </div>
        );
    }
}

export default showUser;