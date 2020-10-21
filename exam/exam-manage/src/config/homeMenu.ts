/*
 * @Author: Lala Jack
 * @Date: 2020-10-19 19:51:54
 * @LastEditors: Ji Lala
 * @LastEditTime: 2020-10-21 17:05:23
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \exam-manage\src\config\homeMenu.ts
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
        icon: ReadOutlined
    },
    {
        title: '班级管理',
        icon: WalletOutlined,
        children: [
            {
                title: '教室管理',
                path: '/home/classroom'
            },
            {
                title: '学生管理',
                path: '/home/student'
            },
            
        ]
    },
    {
        title: "菜单管理",
        icon: MenuUnfoldOutlined
    }
]

