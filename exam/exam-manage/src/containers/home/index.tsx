import React, { Component } from 'react';
import MyMenu from './components/Menu'
import RouterView from '@/router';
import { _getUserInfo, _getUserNew } from '@/api/user'
import { inject, observer } from 'mobx-react'
import { admin } from '@/config/homeMenu'
import viewConfig from '@/config/view_authority'

@inject('user')
@observer
class Home extends Component<any> {
    state = {
        routes: [],
        menu: []
    }
    componentDidMount() {
        this.getUserInfo()
    }
    async  getUserInfo() {
        let res = await _getUserInfo()
        if (res.data.code) {
            this.props.user.setUserInfo(res.data.data)
            this.getUserNew(res.data.data.user_id)
        }
    }
    async getUserNew(user_id: string) {
        let result = await _getUserNew(user_id)
        let arr = admin.map((item: any) => {
            console.log(item)
            if (item.children && item.children.length > 0) {
                item.children = item.children.filter((ite: any) => {
                    return result.data.data.some((b: any) => {
                        return b.view_authority_text === ite.title
                    })
                })
            }
            return item
        })
        let routes = this.props.routes.filter((item: any) => {
            if (item.path === '/home/welcome') return true
            return result.data.data.some((ite: any) => {
                return viewConfig[ite.view_authority_text] === item.path;
            })
        })
        this.setState({
            menu: arr,
            routes: routes
        })
    }

    render() {
       
        return (
            <div className='home'>
                <div className="header">header</div>
                <div className="main">
                    <div className="main-left">
                        {
                            <MyMenu menu={this.state.menu} />
                        }
                    </div>
                    <div className="main-right">
                        <RouterView routes={this.state.routes} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;