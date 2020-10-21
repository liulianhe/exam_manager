/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-21 21:49:08
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'
import TokenTimeOut from '@/containers/error/TokenTimeOut'
import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'
//exam
import AddExam from '@/containers/home/gw_exam/AddExam'
import ExamList from '@/containers/home/gw_exam/ExamList'
import ExamEdit from '@/containers/home/gw_exam/ExamEdit'
import ExamDetail from '@/containers/home/gw_exam/ExamDetail'
// import Student from '@/containers/home/classManager/Student';
//阅卷管理
import MarkingClass from '@/containers/home/marking/index'
import Marking from '@/containers/home/marking/Marking'
import MarkDetail from '@/containers/home/marking/MarkDetail'


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
                component: Welcome
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            },
            //待批班级
            {
                path: '/home/examPaperClassList',
                component: MarkingClass
            },

            {
                path: '/home/examPaperClassmate',
                component: Marking

            },
            // 批卷详情
            {
                path: '/home/addExam',
                component: AddExam
               
            },
            {
                path: '/home/examinationPapers',
                component: MarkDetail
            },
            {
                path: '/home/examList',
                component: ExamList
            },
            {
                path: '/home/examEdit',
                component: ExamEdit
            },
            {
                path: '/home/examDetail',
                component: ExamDetail


            },
            {
                path: '/home/showUser',
                component: ShowUser
            },
            {
                path: '/home/questionsType',
                component: questionsType
            }, {
                path: '/home/watchQuestions',
                component: watchQuestions
            }, {
                path: '/home/questionsDetail/:id',
                component: questionsDetail
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
