import React, { Component, Suspense } from 'react';
import RouterView from '@/router';
import MyMenu from './components/Menu';
import { admin } from '@/config/homeMenu';
import Loading from '@/components/Loading';
import { Avatar, Menu, Dropdown } from 'antd';
import { inject, observer } from 'mobx-react';
import viewConfig from '@/config/view_authority';
import { DownOutlined } from '@ant-design/icons';
import { _getUserInfo, _getUserNew } from '@/api/user'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

interface IProps {
    history: any
    user: any
    routes: any[]
}
interface IState {
    routes: any[]
    menu: any[]
    downMenu: any
}

@inject('user')
@observer
class Home extends Component<IProps, IState> {
    state = {
        routes: [],
        menu: [],
        downMenu: (
            <Menu>
                <Menu.Item>个人中心</Menu.Item>
                <Menu.Item>我的班级</Menu.Item>
                <hr />
                <Menu.Item>设置</Menu.Item>
                <Menu.Item ><span onClick={() => {
                    cookies.remove('token');
                    this.props.history.push('/login')
                }}>退出登录</span></Menu.Item>
            </Menu>
        )
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
                <div className="header">
                    <span>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                    </span>
                    <span>
                        <Dropdown overlay={this.state.downMenu}
                            placement='bottomRight'
                        >
                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2244525695,428286117&fm=26&gp=0.jpg' />
                                {this.props.user.userInfo && this.props.user.userInfo.user_name}
                                <DownOutlined />
                            </span>
                        </Dropdown>

                    </span>
                </div>
                <div className="main">
                    <div className="main-left">
                        {
                            <MyMenu menu={this.state.menu} />
                        }
                    </div>
                    <div className="main-right">
                        <Suspense fallback={<Loading />}>
                            <RouterView routes={this.state.routes} />
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;