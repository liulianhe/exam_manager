import React, { Component } from 'react';
import { _getAllQuestions, _searchList } from '../../../api/questions'
import { Cascader, Button, Tag, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { _getList } from "./config/question"

interface IProps { //定义所需的相应接口
    history: any
}
interface addUpdate {
    exam_id?: string,
    exam_name?: string,
    json_path?: string,
    questions_answer?: string,
    questions_id?: string,
    questions_stem?: string,
    questions_type_id?: string,
    questions_type_text?: string,
    subject_id?: string,
    subject_text?: string,
    title?: string,
    user_id?: string,
    user_name?: string,
    key?: string
}
interface State{
    subject_list: any[],
    QuestionsList: any[],
    ExamList:  any[],
    AllQuestionsList:  any[],
    choice_exam: null,
    choice_question: null,
    choice_subject: null,
    subject_index: null,
}
class ShowQuestions extends Component<IProps,State> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            subject_list: [],
            QuestionsList: [],
            ExamList: [],
            AllQuestionsList: [],
            choice_exam: null,
            choice_question: null,
            choice_subject: null,
            subject_index: null,
        }
    }

    render() {
        const { AllQuestionsList } = this.state
        return (
            <div className="ShowQuestions">
                <h2>查看试题</h2>
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
                    {AllQuestionsList.length <= 0
                        ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                        : AllQuestionsList.map((item: addUpdate) => {
                            return <div className="question_item" key={item.questions_id}>
                                <div className="question_item_tags" onClick={() => { this.questions_del(item.questions_id as string) }}>
                                    <span>{item.title}</span>
                                    <div className="tags_list">
                                        <Tag color="blue">{item.questions_type_text}</Tag>
                                        <Tag color="orange">{item.exam_name}</Tag>
                                        <Tag color="cyan">{item.subject_text}</Tag>
                                    </div>
                                    <a>{item.user_name}发布</a>
                                </div>
                                <Button type="primary" className="edit" onClick={() => { this.edit(item.questions_id as string, item) }}>编辑</Button>
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
        let res = await _getList()
        this.setState({
            subject_list: res.subject_list,
            QuestionsList: res.QuestionsList,
            ExamList: res.ExamList
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
            subject_index: index as unknown as null,
            choice_subject: id as unknown as null
        })
    }

    async search() {
        const params: any = {
            // subject_id: "",
            // exam_id: "",
            // qusestions_type_id: "",
        }
        if (this.state.choice_subject) {
            if (this.state.choice_subject === 100) {
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
        if (Object.values(params).length > 0) {
            let res = await _searchList(params)
            this.setState({
                AllQuestionsList: res.data.data
            })
        }
    }

    //点击跳转试题详情页
    questions_del(id: string) {
        this.props.history.push({
            pathname: `/home/questionsDetail/${id}`
        })
    }

    //点击跳转编辑试题详情
    edit(id: string, item: any) {
        this.props.history.push({
            pathname: `/home/editQuestions/${id}`,
            state: { item }
        })
    }
}

export default ShowQuestions;