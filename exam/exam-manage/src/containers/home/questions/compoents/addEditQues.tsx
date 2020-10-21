import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Input, Cascader, Button, Modal, message } from "antd"
import {_getList} from "../config/question"
import {  _addNewQuestion ,_updateQuestion } from '../../../../api/questions'
import E from 'wangeditor'

interface IProps {
    user?: any,
    title:string,
    item?:any
}

let editor_first: E | null = null;
let editor_two: E | null = null;
@inject('user')
@observer
class AddEditQues extends Component<IProps> {
    state = {
        newQuestion: null,
        subject_list: [],
        QuestionsList: [],
        ExamList: [],
        choice_question: null,
        choice_exam: null,
        choice_subject: null,
        visible: false
    }
    render() {
       const {title,questions_type_text,subject_text,exam_name} =this.props.item
        return (
            <div className="add_question">
                <h2>{this.props.title}</h2>
                <div className="add_question_main">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input placeholder="请输入题目标题，不超过20字" allowClear onChange={(e) => { this.onChange(e) }} className='lagre' defaultValue={title} />
                    <p>题目主题</p>
                    <div id="div1"></div>
                    <span className="type_span">请选择课程类型  <Cascader options={this.state.subject_list} onChange={(v) => { this.changeSubject(v) }} defaultValue={[subject_text]} /></span>
                    <span className="type_span">请选择考试类型  <Cascader options={this.state.ExamList} onChange={(v) => { this.changeExam(v) }} defaultValue={[exam_name]} /></span>
                    <span className="type_span">请选择题目类型  <Cascader options={this.state.QuestionsList} onChange={(v) => { this.changeQuestion(v) }} defaultValue={[questions_type_text]} /></span>
                    <p>答案信息</p>
                    <div id="div2"></div>
                    <Button className='lagre' type="primary" onClick={() => { this.showModal() }} >提交</Button>
                    <Modal
                        title={title?" 您确定修改嘛？":"您确定添加嘛"}
                        visible={this.state.visible}
                        closable={false}
                        onOk={() => { this.handleOk() }}
                        onCancel={() => { this.handleCancel() }}
                        okText="确认"
                        cancelText="取消"
                    >
                       {title?" 确定修改嘛？":"确定添加嘛"}
                    </Modal>
                </div>
            </div>
        );
    }
    componentDidMount() {

        this.getList()
        this.createEditor()
        this.setState({
            choice_question: this.props.item.questions_id||null,
            choice_exam: this.props.item.exam_id||null,
            choice_subject: this.props.item.subject_id||null,
        })
    }

    componentWillUnmount() {
        editor_first?.destroy()
        editor_two?.destroy()
    }

    createEditor() {
        editor_first = new E("#div1")
        editor_first.create()
        editor_first.txt.html(this.props.item.questions_stem)
        editor_two = new E("#div2")
        editor_two.create()
        editor_two.txt.html(this.props.item.questions_answer)
    }
    //输入框值变化时
    onChange(e?: any) {
        this.setState({
            newQuestion: e.target.value
        })
    };

    //添加新类型-对话框显示
    showModal() {
        this.setState({
            visible: true,
        });
    };

    //确认添加新类型
    async handleOk() {
        this.setState({
            visible: false,
        });
        const params = {
            exam_id:this.props.item.exam_id|| this.state.choice_exam,
            questions_answer: ((editor_two as E).txt.text() as string) ,
            questions_stem: (editor_first as E).txt.text()  as string,
            questions_type_id:this.props.item.questions_id|| this.state.choice_question,
            subject_id:this.props.item.subject_id|| this.state.choice_subject,
            title:this.props.item.title|| this.state.newQuestion,
            type: "addQuestions/addQuestions",
            user_id: this.props.user.userInfo.user_id,
        }
        let flag = Object.values(params).every((item) => {
            return (item !== null && item !== "")
        })
        console.log()
        if(!this.props.item.title){
            if (flag) {
                let res =await _addNewQuestion(params)
                if(res.data.code){
                  message.info("添加成功")
                }
            }else{
                message.error("添加失败")
            }
        }else{
            if (flag) {
                let newParams =Object.assign({questions_id:this.props.item.questions_id},params)
                let res =await  _updateQuestion(newParams)
                console.log(res)
                if(res.data.code){
                  message.info("修改成功")
                }else{
                    message.warning("权限不足") 
                }
            }else{
                message.error("修改失败")
            }
        }
    };

    //取消添加新类型
    handleCancel() {
        this.setState({
            visible: false,
        });
    };

    //获取 课程分类列表  考试分类列表  题目类型列表
      async getList() {
        let res =await _getList()
        res.subject_list.shift()
        this.setState({
            subject_list:  res.subject_list,
            QuestionsList: res.QuestionsList,
            ExamList: res.ExamList
        })
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

export default AddEditQues;