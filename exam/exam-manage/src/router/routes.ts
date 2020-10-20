/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-20 22:08:33
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'
import TokenTimeOut from '@/containers/error/TokenTimeOut'
import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'


//添加用户
import AddUser from '@/containers/user/addUser'
import ShowUser from '@/containers/user/showUser'
import questionsType from '@/containers/home/questions/questionsType'
import watchQuestions from '@/containers/home/questions/watchQuestions'
import questionsDetail from '@/containers/home/questions/questionsDetail'
export default [
    {
        path: '/',
        redirect: '/home/welcome'
    },
    {
        path: '/home',
        component: Home,
        authToken: true,
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
                path: '/home/addUser',
                component: AddUser
            },
            {
                path: '/home/showUser',
                component: ShowUser
            },{
                path: '/home/questionsType',
                component:questionsType
            },{
                path: '/home/watchQuestions',
                component: watchQuestions
            },{
              path:'/home/questionsDetail/:id',
              component:questionsDetail
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
