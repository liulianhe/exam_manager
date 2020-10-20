import React, { Component } from 'react';
import { Button } from 'antd'
interface IProps {
    history: any
}
interface IState {

}
class TokenTimeOut extends Component<IProps, IState> {
    render() {
        return (
            <div>
                <h1>无权访问，请重新登录</h1>
                <Button onClick={() => { this.props.history.push('/login') }}>重新登录</Button>
            </div>
        );
    }
}

export default TokenTimeOut;