import React, { Component } from 'react';
import { _getObjectList, _getExamList, _getQuestionsList, _getAllQuestions, _searchList } from '../../../api/questions'
import E from 'wangeditor'
import { Input, Cascader } from "antd"
let editor: E | null = null
class AddQuestions extends Component {
    state = {
        newQuestion: null,
        subject_list: [],
        QuestionsList: [],
        ExamList: [],
        choice_question: null,
        choice_exam: null,
        choice_subject: null
    }
    render() {
        return (
            <div className="add_question">
                <div className="add_question_main">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input placeholder="请输入题目标题，不超过20字" allowClear onChange={(e) => { this.onChange(e) }} />
                    <p>题目主题</p>
                    <div id="div1"></div>
                    <span className="type_span">课程类型：  <Cascader options={this.state.subject_list} onChange={(v) => { this.changeSubject(v) }} /></span>
                    <span className="type_span">考试类型：  <Cascader options={this.state.ExamList} onChange={(v) => { this.changeExam(v) }} /></span>
                    <span className="type_span">题目类型：  <Cascader options={this.state.QuestionsList} onChange={(v) => { this.changeQuestion(v) }} /></span>
                    <button onClick={() => { this.getText() }}>获取text</button>
                </div>
            </div>
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
    }
}

export default AddQuestions;