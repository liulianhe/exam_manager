import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'

import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'
import Student from '@/containers/home/classmanager/Student';
import Classroom from '@/containers/home/classmanager/Classroom';
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
                path: '/home/student',
                component: Student
            },
            {
                path: '/home/classroom',
                component: Classroom
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
