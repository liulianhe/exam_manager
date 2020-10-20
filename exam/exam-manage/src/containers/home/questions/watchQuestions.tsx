import React, { Component } from 'react';
import { _getObjectList, _getExamList, _getQuestionsList, _getAllQuestions, _searchList } from '../../../api/questions'
import { Cascader, Button, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface IProps { //定义所需的相应接口
    history: any
}

class ShowQuestions extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    state = {
        subject_list: [],
        QuestionsList: [],
        ExamList: [],
        AllQuestionsList: [],
        choice_exam: null,
        choice_question: null,
        choice_subject: null,
        subject_index: null,
    }
    render() {
        const { AllQuestionsList } = this.state
        return (
            <div className="ShowQuestions">
                <h1>查看试题</h1>
                <div className="search_main">
                    <div className="object_type">
                        <span>课程分类：</span>
                        {
                            this.state.subject_list.map((item: any, index: number) => {
                                return <span key={item.subject_id} className={this.state.subject_index === index ? "click_span" : ""} onClick={() => { this.changeSubject(item.subject_id, index) }}>{item.subject_text}</span>
                            })
                        }
                    </div>
                    <div className="test_type">
                        <span className="type_span">考试类型：  <Cascader options={this.state.ExamList} onChange={(v) => { this.changeExam(v) }} /></span>
                        <span className="type_span">题目类型：  <Cascader options={this.state.QuestionsList} onChange={(v) => { this.changeQuestion(v) }} /></span>
                        <Button type="primary" icon={<SearchOutlined />} onClick={() => { this.search() }} >查询</Button>
                    </div>
                </div>
                <div className="show_list">
                    {
                        AllQuestionsList.map((item: any) => {
                            return <div className="question_item" key={item.questions_id} onClick={() => { this.questions_del(item.questions_id) }}>
                                <div className="question_item_tags">
                                    <span>{item.title}</span>
                                    <div className="tags_list">
                                        <Tag color="blue">{item.questions_type_text}</Tag>
                                        <Tag color="orange">{item.exam_name}</Tag>
                                        <Tag color="cyan">{item.subject_text}</Tag>
                                    </div>
                                    <a>{item.user_name}发布</a>
                                </div>
                                <Button type="primary">编辑</Button>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getList()
        this.getAllQuestions()
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
        let arr: any[] = res_Object.data.data
        arr.unshift({ subject_text: "All", subject_id: 100 })
        this.setState({
            subject_list: arr,
            QuestionsList: arr1,
            ExamList: arr2
        })
    }

    //获取 试题列表
    async getAllQuestions() {
        let res = await _getAllQuestions()
        this.setState({
            AllQuestionsList: res.data.data
        })
    }


    //查询：选择考试类型
    changeExam(value?: any) {
        this.setState({
            choice_exam: value[0]
        })
    }
    //查询：选择题目类型
    changeQuestion(value?: any) {
        this.setState({
            choice_question: value[0]
        })
    }
    //查询：选择课程类型
    changeSubject(id: string, index: number) {
        if (index === 0) {
            this.getAllQuestions()
        }
        this.setState({
            subject_index: index,
            choice_subject: id
        })
    }

    async search() {
        const params: any = {
            // subject_id: "",
            // exam_id: "",
            // qusestions_type_id: "",
        }
        if (this.state.choice_subject) {
           if( this.state.choice_subject === 100){
              return
           }
            params.subject_id = this.state.choice_subject
        }
        if (this.state.choice_exam) {
            params.exam_id = this.state.choice_exam
        }
        if (this.state.choice_question) {
            params.qusestions_type_id = this.state.choice_question
        }
        if(Object.values(params).length>0){
            let res = await _searchList(params)
            this.setState({
                AllQuestionsList:res.data.data
            })
        }
    }

    //点击跳转试题详情页
    questions_del(id: any) {
        console.log(id)
        this.props.history.push({
            pathname:`/home/questionsDetail/${id}`
        })
    }
}

export default ShowQuestions;