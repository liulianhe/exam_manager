import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu;


interface IProps {
    menu: any[]
}
class MyMenu extends React.Component<IProps> {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { menu } = this.props
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {
                        menu.map((item: any, index: number) => {
                            return item.children && item.children.length > 0 && <SubMenu key={index + 'sub'} icon={<item.icon />} title={item.title}>
                                {
                                    item.children.map((e: any, i: number) => {
                                        return <Menu.Item key={i + e}>
                                            <NavLink to={e.path}>
                                                {e.title}
                                            </NavLink>
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default MyMenu;