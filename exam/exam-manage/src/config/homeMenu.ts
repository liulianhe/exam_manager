/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-19 11:27:02
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-21 21:46:04
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
        icon: ReadOutlined,
        children: [
            {
                title: '添加考试',
                path: '/home/addExam'
            },
            {
                title: '试卷列表',
                path: '/home/examList'
            }
        ]
    },
    {
        title: '班级管理',
        icon: WalletOutlined
    },
    {
        title: "阅卷管理",
        icon: MenuUnfoldOutlined,
        children:[
            {
            title:'批卷班级',
            path:'/home/examPaperClassList'
        }
    ]
    
    },
    {
        title: "菜单管理",
        icon: MenuUnfoldOutlined,
        
    }
]