import React, { Component } from 'react';
import MyLayout from './components/Layout'
import { _getApiAuth, _getIdentityApi, _getIdentityView, _getUser, _getIdentity, _getViewAuth } from '@/api/user'

interface IProps {
}
interface IState {
    ApiAuth: any[],
    IdentityApi: any[],
    IdentityView: any[],
    User: any[],
    Identity: any[],
    ViewAuth: any[]
}
class addUser extends Component<IProps, IState> {
    state = {
        ApiAuth: [],
        IdentityApi: [],
        IdentityView: [],
        User: [],
        Identity: [],
        ViewAuth: []
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
        })
    }
    render() {
        return (
            <div className='adduser'>
                <h2>添加用户</h2>
                <MyLayout {...this.state} />
            </div>
        );
    }
}

export default addUser;