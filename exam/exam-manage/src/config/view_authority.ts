/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘连合
 * @Date: 2020-10-20 22:00:46
 * @LastEditors: 刘连合
 * @LastEditTime: 2020-10-20 23:06:31
 */
const viewConfig: any = {
    "登录": '/login',
    "主页面": '/home',
    "添加试题": "/home/addQuestions",
    "试题分类": "/home/questionsType",
    "查看试题": "/home/watchQuestions",
    "添加用户": "/home/addUser",
    "用户展示": "/home/showUser",
    "添加考试": "/home/addExam",
    "添加菜单": "/home/menu",
    "编辑试题": "/home/editQuestions",
    "试题详情": "/home/questionsDetail/:id",
    "班级管理": "/home/grade",
    "学生管理": "/home/student",
    "教室管理": "/home/room",
    "试卷列表": "/home/examList",
    "创建试卷": "/home/examEdit",
    "试卷详情": "/home/examDetail/:id",
    "阅卷": "/home/examinationPapers",
    "批卷班级": "/home/examPaperClassList",
    "待批试卷": "/home/examPaperClassmate",
}
export default viewConfig;