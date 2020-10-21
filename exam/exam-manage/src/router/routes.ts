/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-21 22:55:50
 */
import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'
import TokenTimeOut from '@/containers/error/TokenTimeOut'
import Welcome from '@/containers/home/Welcome'

//阅卷管理
import MarkingClass from '@/containers/home/marking/index'
import Marking from '@/containers/home/marking/Marking'
import MarkDetail from '@/containers/home/marking/MarkDetail'
//添加用户
import AddUser from '@/containers/user/addUser'
import ShowUser from '@/containers/user/showUser'
//试题管理
import QuestionsType from '@/containers/home/questions/questionsType'
import WatchQuestions from '@/containers/home/questions/watchQuestions'
import QuestionsDetail from '@/containers/home/questions/questionsDetail'
import AddQuestions from '@/containers/home/questions/addQuestions'
import EditQuestions from "@/containers/home/questions/editQuestions"

//班级管理
import Grade from '@/containers/home/grade'
import Student from '@/containers/home/classmanager/Student';
import Classroom from '@/containers/home/classmanager/Classroom';

//exam
import AddExam from '@/containers/home/gw_exam/AddExam'
import ExamList from '@/containers/home/gw_exam/ExamList'
import ExamEdit from '@/containers/home/gw_exam/ExamEdit'
import ExamDetail from '@/containers/home/gw_exam/ExamDetail'
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
                path: '/home/examinationPapers',
                component: MarkDetail
            },
            {
                path: '/home/addUser',
                component: AddUser
            },
            {
                path: '/home/showUser',
                component: ShowUser
            }, 
            //试题管理
            {
                path: '/home/questionsType',
                component: QuestionsType
            }, 
            {
                path: '/home/watchQuestions',
                component: WatchQuestions
            }, 
            {
                path: '/home/questionsDetail/:id',
                component: QuestionsDetail
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            },
            {
                path:'/home/editQuestions/:id',
                component:EditQuestions
            },
            // 班级管理
            {
                path: '/home/grade',
                component: Grade
            },
            {
                path: '/home/student',
                component: Student
            },
            {
                path: '/home/room',
                component: Classroom
            },

            //试卷管理
            {
                path: '/home/addExam',
                component: AddExam
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
                path:'/home/examDetail',
                component: ExamDetail
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
