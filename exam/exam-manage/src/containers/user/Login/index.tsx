import { _login } from '@/api/user'
import { message, Checkbox,notification } from 'antd'
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
        if (this.state.user_name === '' || this.state.user_pwd === '') return      notification.error({
            message: "账号或密码不正确",
            duration:2
          });
         if( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/g.test(this.state.user_pwd))return message.error('密码格式不正确')
        let res = await _login({
            user_name: this.state.user_name,
            user_pwd: this.state.user_pwd
        })
        if (res.data.code) {
            message.success(res.data.msg, 1, () => {
                this.props.cookies.set('token', res.data.token)
                if (this.state.remember) {
                    this.props.cookies.set('user_name', this.state.user_name)
                    this.props.cookies.set('user_pwd', this.state.user_pwd)
                } else {
                    this.props.cookies.remove('user_name')
                    this.props.cookies.remove('user_pwd')
                }
                window.location.href = '/'
                this.props.user.setUserInfo(res.data.userInfo)
            })
        } else {
            notification.error({
                message: res.data.msg,
                duration:2
              });
        }
    }

    render() {
        return (
            <div className='login'>
                <div className='form'>
                    <h2>考试管理系统</h2>
                    <p>
                        <span className="s">
                            <UserOutlined />
                            <span>账号</span>
                        </span>
                        <input type="text" name='user_name'
                            value={this.state.user_name}
                            placeholder="请输入账号：用户名或手机号"
                            onChange={(e) => {
                                this.setState({
                                    user_name: e.target.value
                                })
                            }} />
                    </p>
                    <p>
                        <span  className="s"><UnlockOutlined /> <span>密码</span></span>
                        <input type="password" name='user_pwd'
                            value={this.state.user_pwd}
                            placeholder="请输入密码"
                            onChange={(e) => {
                                this.setState({
                                    user_pwd: e.target.value
                                })
                            }}
                        />
                    </p>
                    <p className="ss">
                        <Checkbox checked={this.state.remember}
                            onChange={(e) => {
                                this.setState({
                                    remember: e.target.checked
                                })
                            }}
                        /> 记住密码
                    </p>
                    <button onClick={() => { this.onChange() }}>登录</button>
                </div>

            </div>
        );
    }
}

export default withCookies(Login);