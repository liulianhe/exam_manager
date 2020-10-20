/*
 * @Author: Lala Jack
 * @Date: 2020-10-19 11:23:13
 * @LastEditors: Ji Lala
 * @LastEditTime: 2020-10-19 18:32:04
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \exam-manage\src\router\routes.ts
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'
import TokenTimeOut from '@/containers/error/TokenTimeOut'
import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'
import Student from '@/containers/home/classManager/Student';


//添加用户
import AddUser from '@/containers/user/addUser'
import ShowUser from '@/containers/user/showUser'
export default [
    {
        path: '/',
        redirect: '/home/welcome'
    },
    {
        path: '/home',
        component: Home,
        authToken: true,
        redirect: '/home/welcome',
        children: [
            {
                path: '/home/welcome',
                component: Welcome,
                menu: false
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            },
            {
                path: '/home/student',
                component: Student,
            },
            {
                path: '/home/addUser',
                component: AddUser
            },
            {
                path: '/home/showUser',
                component: ShowUser
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: Error_404
    },
    {
        path: '/tokenTimeOut',
        component: TokenTimeOut
    }
]
