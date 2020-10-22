/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-21 22:33:34
 */

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

import questionsType from '@/containers/home/questions/questionsType'
import watchQuestions from '@/containers/home/questions/watchQuestions'
import questionsDetail from '@/containers/home/questions/questionsDetail'
import LazyLoad from '@/components/LazyLoad'
//一级路由
const Home = LazyLoad('home')
const Login = LazyLoad('user/Login')
//错误页面
const Error_404 = LazyLoad('error/404')
const Error_401 = LazyLoad('error/401')
const Error_500 = LazyLoad('error/500')
//二级路由使用按需加载，省略@/containers/
const Welcome = LazyLoad('home/Welcome')
const AddUser = LazyLoad('user/addUser')
const ShowUser = LazyLoad('user/showUser')
const AddQuestions = LazyLoad('home/questions/AddQuestions')

/**
 * 路由配置表
 * @param  path   路由路径
 * @param  redirect 重定向
 * @param  component 视图组件
 * @param  authToken 是否启用token拦截视图
 * @param  children 子路由
 */
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
                
                path: '/home/addUser',
                component: AddUser
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
        path: '/401',
        component: Error_401
    },
    {
        path: '/500',
        component: Error_500
    }
]
