/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-19 21:13:50
 */
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    ReadOutlined,
    WalletOutlined,
    UserOutlined
} from '@ant-design/icons';
export const admin = [
    {
        title: '试题管理',
        icon: AppstoreOutlined,
        children: [
            {
                title: '添加试题',
                path: '/home/questions/addQuestions'
            },
            {
                title: '试题分类',
                path: '/home/questionsType'
            }, {
                title: '查看试题',
                path: '/home/watchQuestions'
            }
        ]
    },
    {
        title: '用户管理',
        icon: UserOutlined
    },
    {
        title: '考试管理',
        icon: ReadOutlined
    },
    {
        title: '班级管理',
        icon: WalletOutlined
    },
    {
        title: "菜单管理",
        icon: MenuUnfoldOutlined
    }
]