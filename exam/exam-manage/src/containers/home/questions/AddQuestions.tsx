import React, { Component } from 'react'
import AddEditQues from "./compoents/AddEditQues"
interface IProps {
    history: any,
    match: any
}
class AddQuestions extends Component<IProps> {
    render() {
        return (
            <div>
                <AddEditQues title="添加试题" item={{}} />
            </div>
<<<<<<< HEAD
        );
    }
    componentDidMount() {
        this.getList()
        editor = new E("#div1")
        editor.config.onchange = (newHtml: any) => {
            console.log(newHtml)
        }
        /**一定要创建 */
        editor.create()
    }

    componentWillUnmount() {
        (editor as E).destroy()
    }
    //输入框值变化时
    onChange(e?: any) {
        this.setState({
            newQuestion: e.target.value
        })
    };

    getText() {
        alert((editor as E).txt.text())
    }


    //获取 课程分类列表  考试分类列表  题目类型列表
    async getList() {
        let res_Object = await _getObjectList()
        let res_Questions = await _getQuestionsList()
        let res_Exam = await _getExamList()
        let arr1: any[] = []
        res_Questions.data.data.map((item: any) => {
            item.value = item.questions_type_id
            item.label = item.questions_type_text
            arr1.push(item)
        })
        let arr2: any[] = []
        res_Exam.data.data.map((item: any) => {
            item.value = item.exam_id
            item.label = item.exam_name
            arr2.push(item)
        })
        let arr: any[] = []
        res_Object.data.data.map((item: any) => {
            item.value = item.subject_id
            item.label = item.subject_text
            arr.push(item)
        })
        this.setState({
            subject_list: arr,
            QuestionsList: arr1,
            ExamList: arr2
        })
        console.log(this.state.subject_list)
    }

    //选择题目类型
    changeQuestion(value?: any) {
        this.setState({
            choice_question: value[0]
        })
    }
    //选择考试类型
    changeExam(value?: any) {
        this.setState({
            choice_exam: value[0]
        })
    }
    //选择课程类型
    changeSubject(value?: any) {
        this.setState({
            choice_subject: value[0]
        })
=======
        )
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
    }
}
export default AddQuestions
