/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-22 21:04:25
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
        icon: UserOutlined,
        children:[
            {
                title: '添加用户',
                path: '/home/addUser'
            },
            {
                title: '用户展示',
                path: '/home/showUser'
            }
        ]
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
        icon: WalletOutlined,
        children: [
            {
                title: '班级管理',
                path: '/home/grade'
            },
            {
                title: '教室管理',
                path: '/home/room'
            },
            {
                title: '学生管理',
                path: '/home/student'
            },
        ]
    },
    {
        title: "阅卷管理",
        icon: MenuUnfoldOutlined,
        children: [
            {
                title: '批卷班级',
                path: '/home/examPaperClassList'
            },
            {
                title: '月考预测',
                path: '/home/mexamPred'
            }
        ]

    },
    {
        title: "菜单管理",
        icon: MenuUnfoldOutlined,

    }
]