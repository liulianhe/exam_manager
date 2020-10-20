import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'

import Welcome from '@/containers/home/Welcome'
import MarkingClass from '@/containers/home/marking/index' //阅卷管理 待批班级
import Marking from '@/containers/home/marking/Marking'
import AddQuestions from '@/containers/home/questions/AddQuestions'

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
                path: '/home/mark',
                component: MarkingClass
            },
            {
                path: '/home/marking',
                component: Marking
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
