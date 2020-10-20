import React, { Component } from 'react';
import { Button } from 'antd'
import { _getApiAuth, _getIdentityApi, _getIdentityView, _getUser, _getIdentity, _getViewAuth } from '@/api/user'
import Table from './components/Table'
import setColumns from './config/setColumns'
import navList from './config/navList'
interface IProps {

}
interface IState {
    apiAuth: any[]
    identityApi: any[]
    identityView: any[]
    user: any[]
    identity: any[]
    viewAuth: any[]
    tableList: any[]
    tableColumns: any[]
    title: string
    navList: any[]
    num: number
}
class showUser extends Component<IProps, IState> {
    state = {
        apiAuth: [],
        identityApi: [],
        identityView: [],
        user: [],
        identity: [],
        viewAuth: [],
        tableList: [],
        tableColumns: [],
        title: '',
        navList: navList,
        num: 0
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
            apiAuth: ApiAuth.data.data,
            identityApi: IdentityApi.data.data,
            identityView: IdentityView.data.data,
            user: User.data.data,
            identity: Identity.data.data,
            viewAuth: ViewAuth.data.data
        }, () => {
            this.setTableList('user')
        })
    }
    setTableList(type: string) {
        let action = setColumns(type)
        //@ts-ignore
        this.setTable(this.state[type], action.columns, action.title)

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
                        this.state.navList.map((item: any, index: number) => {
                            return <Button key={item.title}
                                className={this.state.num === index ? "showUseraction" : ""}
                                onClick={() => {
                                    this.setState({ num: index })
                                    this.setTableList(item.type)
                                }}
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