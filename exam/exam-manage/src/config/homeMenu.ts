/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-19 11:27:02
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-19 14:31:13
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
                path: '/home/addQuestions'
            }
        ]
    },
    {
        title: '用户管理',
        icon: UserOutlined
    },
    {
        title: '考试管理',
        icon: ReadOutlined,
        children: [
            {
                title: '添加考试',
                path: '/home/addExam'
            }
        ]
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