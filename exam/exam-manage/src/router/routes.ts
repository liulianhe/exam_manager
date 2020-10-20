/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-19 11:27:02
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-19 14:35:59
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'

import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'
import AddExam from '@/containers/home/gw_exam/AddExam'
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
                component: Welcome
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            },
            {
                path: '/home/addExam',
                component: AddExam
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
    }
]
