import { _login } from '@/api/user'
import { message, Checkbox } from 'antd'
import React, { Component } from 'react';
import { withCookies } from 'react-cookie'
import { inject, observer } from 'mobx-react'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
interface IProps {
    [key: string]: any
}
interface IState {
    remember: boolean
    user_name: string
    user_pwd: string
}
@inject('user')
@observer
class Login extends Component<IProps, IState> {
    state = {
        remember: this.props.cookies.get('user_name') ? true : false,
        user_name: this.props.cookies.get('user_name') || '',
        user_pwd: this.props.cookies.get('user_pwd') || ''
    }
    async  onChange() {
        if (this.state.user_name === '' || this.state.user_pwd === '') return message.warning('请输入正确的密码和用户名')
        let res = await _login({
            user_name: this.state.user_name,
            user_pwd: this.state.user_pwd
        })
        if (res.data.code) {
            message.success(res.data.msg, 1, () => {
                this.props.cookies.set('token', res.data.token)
                if (this.state.remember) {
                    this.props.cookies.set('user_name', this.state.user_name, { path: '/' })
                    this.props.cookies.set('user_pwd', this.state.user_pwd, { path: '/' })
                } else {
                    this.props.cookies.remove('user_name')
                    this.props.cookies.remove('user_pwd')
                }
                this.props.history.push('/')
                this.props.user.setUserInfo(res.data.userInfo)
            })
        } else {
            message.error(res.data.msg)
        }
    }

    render() {
        return (
            <div className='login'>
                <div className='form'>
                    <h2>考试管理系统</h2>
                    <p>
                        <span><UserOutlined /></span>
                        <input type="text" name='user_name'
                            value={this.state.user_name}
                            onChange={(e) => {
                                this.setState({
                                    user_name: e.target.value
                                })
                            }} />
                    </p>
                    <p>
                        <span><UnlockOutlined /></span>
                        <input type="password" name='user_pwd'
                            value={this.state.user_pwd}
                            onChange={(e) => {
                                this.setState({
                                    user_pwd: e.target.value
                                })
                            }}
                        />
                    </p>
                    <div>
                        <Checkbox checked={this.state.remember}
                            onChange={(e) => {
                                this.setState({
                                    remember: e.target.checked
                                })
                            }}
                        /> 记住密码
                    </div>
                    <button onClick={() => { this.onChange() }}>登录</button>
                </div>

            </div>
        );
    }
}

export default withCookies(Login);