import React, { Component } from 'react';
import MyLayout from './components/Layout'
import { _getApiAuth, _getUser, _getIdentity, _getViewAuth } from '@/api/user'
import { addUserForm, editUserForm, addIdFrom, addApiFrom, addViewFrom, idSetApiFrom, idSetViewFrom } from './config/form'
interface IProps {
}
interface IState {
    ApiAuth: any[],
    User: any[],
    Identity: any[],
    ViewAuth: any[]
}
class addUser extends Component<IProps, IState> {
    state = {
        ApiAuth: [],
        User: [],
        Identity: [],
        ViewAuth: []
    }
    componentDidMount() {
        this.getAllUserList()
    }
    change() {
        this.getAllUserList()
    }
    async getAllUserList() {
        let ApiAuth = await _getApiAuth()
        let User = await _getUser()
        let Identity = await _getIdentity()
        let ViewAuth = await _getViewAuth()
        addUserForm[2].list = Identity.data.data
        editUserForm[0].list = User.data.data
        editUserForm[3].list = Identity.data.data
        idSetApiFrom[0].list = Identity.data.data
        idSetApiFrom[1].list = ApiAuth.data.data
        idSetViewFrom[0].list = Identity.data.data
        idSetViewFrom[1].list = ViewAuth.data.data
        this.setState({
            ApiAuth: ApiAuth.data.data,
            User: User.data.data,
            Identity: Identity.data.data,
            ViewAuth: ViewAuth.data.data
        })
    }
    render() {
        return (
            <div className='adduser'>
                <h2>添加用户</h2>
                <MyLayout
                    addUserForm={addUserForm}
                    editUserForm={editUserForm}
                    addIdFrom={addIdFrom}
                    addApiFrom={addApiFrom}
                    addViewFrom={addViewFrom}
                    idSetApiFrom={idSetApiFrom}
                    idSetViewFrom={idSetViewFrom}
                    change={() => this.change()}
                />
            </div>
        );
    }
}

export default addUser;