import React, { Component } from 'react';
import { _login } from '@/api/user'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react'
@inject('user')
@observer
class Login extends Component<any> {
    status = {

    }
    async  onChange() {
        let action = {
            user_name: (this.user_name as HTMLInputElement).value,
            user_pwd: (this.user_pwd as HTMLInputElement).value
        }
        let res = await _login(action)
        if (res.data.code) {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/')
            this.props.user.setUserInfo(res.data.userInfo)
        }
    }
    user_name: null | HTMLInputElement = null
    user_pwd: null | HTMLInputElement = null
    render() {
        return (
            <div className='login'>
                <div className='form'>
                    <h2>考试管理系统</h2>
                    <p>
                        <span><UserOutlined /></span>
                        <input type="text" value='heinan' ref={(e) => { this.user_name = e }} name='user_name' onChange={() => { }} />
                    </p>
                    <p>
                        <span><UnlockOutlined /></span>
                        <input type="password" value='1qaz!QAZ' ref={(e) => { this.user_pwd = e }} name='user_pwd' onChange={() => { }} />
                    </p>
                    <button onClick={() => { this.onChange() }}>登录</button>
                </div>

            </div>
        );
    }
}

export default Login;