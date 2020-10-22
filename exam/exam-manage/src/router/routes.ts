/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-19 11:05:35
 * @LastEditors: 郭雯
 * @LastEditTime: 2020-10-22 20:49:40
 */
import LazyLoad from '@/components/LazyLoad'

//一级路由
const Home = LazyLoad('home')
const Login = LazyLoad('user/Login')
//错误页面
const Error_404 = LazyLoad('error/404')
const Error_401 = LazyLoad('error/401')
const Error_500 = LazyLoad('error/500')

//阅卷管理
const MarkingClass = LazyLoad('home/marking')
const Marking = LazyLoad('home/marking/Marking')
const MarkDetail = LazyLoad('home/marking/MarkDetail')
const MexamPred = LazyLoad('home/marking/MexamPred')

//试题管理
const QuestionsType = LazyLoad('home/questions/questionsType')
const WatchQuestions = LazyLoad('home/questions/watchQuestions')
const QuestionsDetail = LazyLoad('home/questions/questionsDetail')
const AddQuestions = LazyLoad('home/questions/AddQuestions')
const EditQuestions = LazyLoad('home/questions/editQuestions')
//班级管理
const Grade = LazyLoad('home/grade')
const Student = LazyLoad('home/classmanager/Student')
const Classroom = LazyLoad('home/classmanager/Classroom')


//exam
const AddExam = LazyLoad('home/gw_exam/AddExam')
const ExamList = LazyLoad('home/gw_exam/ExamList')
const ExamEdit = LazyLoad('home/gw_exam/ExamEdit')
const ExamDetail = LazyLoad('home/gw_exam/ExamDetail')


//二级路由使用按需加载，省略@/containers/
const Welcome = LazyLoad('home/Welcome')
const AddUser = LazyLoad('user/addUser')
const ShowUser = LazyLoad('user/showUser')

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
            {
                path: '/home/mexamPred',
                component: MexamPred
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
                path: '/home/editQuestions/:id',
                component: EditQuestions
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
                path: '/home/examDetail',
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
        path: '/401',
        component: Error_401
    },
    {
        path: '/500',
        component: Error_500
    }
]
