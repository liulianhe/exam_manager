import React, { Component } from 'react'
import { Button, Drawer, Select } from 'antd';
import { inject, observer } from 'mobx-react';
import { _subject, _examType, _getQuestionsType, _questionsNew, _questionsCondition, _questionsUpdate } from '@/api/exam'
const { Option } = Select;
interface IProps { //定义所需的相应接口
    onSave: any,
    onEdit: any,
    handlevisible: any,
    [key: string]: any,
}
interface Item {
    exam_id: string,
    exam_name: string,
    subject_id: string,
    subject_text: string,
    questions_type_id: string,
    questions_type_text: string,
    [key: string]: any,
}
@inject('exam')
@observer
export default class ExamEdit extends Component<IProps> {
    state = {
        visible: false,
        childrenDrawer: false,
        subject: [], //科目
        examType: [],//考试类型
        questionsType: [],//题目类型
        questionsNew: [],//全部试题
        questionsCondition: [],//搜索到的内容
        active: 999,//高亮
        addCont: [],//添加的内容
        detailCont: {},//跳转页面

        subject_id: '',
        exam_id: '',
        questions_type_id: '',
        questions_id: "",
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });

        this.subject()
        this.examType()
        this.getQuestionsType()
        this.questionsNew()
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };
    //所有课程接口
    async subject() {
        const res = await _subject()
        if (res.data.code) {
            this.setState({
                subject: res.data.data
            })
        }
    }
    //考试类型
    async examType() {
        const res = await _examType()
        if (res.data.code) {
            this.setState({
                examType: res.data.data
            })

        }
    }
    //题目类型 _getQuestionsType
    async getQuestionsType() {
        const res = await _getQuestionsType()
        if (res.data.code) {
            this.setState({
                questionsType: res.data.data
            })

        }
    }
    //创建试卷
    async questionsUpdate() {
        console.log(this.props.exam.eaxmAddInfo)
        const obj = {
            // exam_id:this.props.exam.eaxmAddInfo.exam_id,
            // questions_answer:;
            // questions_stem:;
            // questions_type_id:;
            // subject_id:;
            // title:;
        }

        // title: this.el && this.el.value,
        //     subject_id: this.state.subject_id,
        //     exam_id: this.state.exam_id,
        //     start_time: this.state.start_time,
        //     end_time: this.state.end_time,
        //     number: this.state.number,

        // const res = await _questionsUpdate()
        // if (res.data.code) {
        //     this.setState({
        //         questionsNew: res.data.data
        //     })

        // }

    }
    async questionsCondition() {
        let obj: any = {
            // qusestions_type_id: this.state.qusestions_type_id,
            // exam_id: this.state.exam_id,
            // subject_id: this.state.subject_id,
        }
        if (this.state.questions_type_id) {
            obj.questions_type_id = this.state.questions_type_id
        }
        if (this.state.exam_id) {
            obj.exam_id = this.state.exam_id
        }
        if (this.state.subject_id) {
            obj.subject_id = this.state.subject_id
        }
        const res = await _questionsCondition(obj)
        if (res.data.code) {
            this.setState({
                questionsCondition: res.data.data
            })
            console.log(res.data)
        }
    }
    //
    async questionsNew() {
        const res = await _questionsNew()
        if (res.data.code) {
            this.setState({
                questionsNew: res.data.data
            })

        }

    }
    //查询
    search() {
        this.questionsCondition()
    }
    //选择考试类型：
    handleChange(value: any) {
        this.setState({
            exam_id: value
        })
    }
    handleChange1(value: any) {
        this.setState({
            questions_type_id: value
        })
    }
    //添加背景
    activeEvent(i: number, subject_id: string) {
        this.setState({
            active: i,
            subject_id: subject_id
        })
    }
    //添加试题
    addList(item: {}) {
        let a: any = []
        a.push(item)
        this.setState({
            addCont: this.state.addCont.concat(a)
        })
    }
    //详情页面
    detail(item: {}) {
        this.setState({
            detailCont: item
        })
    }
    //创建时间
    addEvent() {
        this.questionsUpdate()
    }
    render() {
        return (
            <div className='gwexamEdit'>
                <h2>
                    创建试卷
                </h2>
                <div className='gwexamEdit_cont'>
                    <Button onClick={this.showDrawer}>+ 添加新题</Button>
                    <div className='gwexamEdit_cont_01'>
                        <h3>{this.props.exam.eaxmAddInfo.title}woshi wangzai</h3>
                        {/* {this.props.exam.eaxmAddInfo.allTime} */}
                        <p>考试时间：1:30 监考人：旺仔 考试时间：{this.props.exam.eaxmAddInfo.start_time} 阅卷人：旺仔</p>
                    </div >
                    {
                        this.state.addCont && this.state.addCont.map((item: Item) => {
                            return <div key={item.questions_id} className='list_cont'>
                                <b>{item.title}</b>
                                <p>{item.questions_stem}</p>
                                <p>{item.questions_answer}</p>
                            </div>
                        })
                    }
                </div>

                <Drawer
                    title="所有题目"
                    width={700}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className='allExam'>
                        <p>
                            课程类型：
                            <span onClick={() => this.activeEvent(0, '')}
                                className={this.state.active == 0 ? 'spanclass' : ''}
                            >all</span>
                            {
                                this.state.subject.map((item: Item, index) => {
                                    return <span key={item.subject_id}
                                        onClick={() => this.activeEvent(index + 1, item.subject_id)}
                                        id={this.state.active == index + 1 ? 'spanclass' : ''}
                                        className={this.state.active == 0 ? 'spanclass' : ''}
                                    >{item.subject_text}</span>
                                })
                            }
                        </p>
                        <div>
                            考试类型：<Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange(e)}>
                                {
                                    this.state.examType.map((item: Item) => {
                                        return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div>
                            题目类型：<Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange1(e)}>
                                {
                                    this.state.questionsType.map((item: Item) => {
                                        return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <Button type="primary" onClick={() => this.search()}>查询</Button>
                    </div>
                    <div className='questionsNew_cont'>
                        {
                            this.state.questionsCondition.length ? this.state.questionsCondition.map((item: Item) => {
                                return <div key={item.questions_id}>
                                    <b>{item.title}</b>
                                    <p>
                                        <span>{item.questions_type_text}</span>
                                        <span>{item.subject_text}</span>
                                        <span>{item.exam_name}</span>
                                        <b>
                                            <i onClick={() => this.addList(item)}>添加</i> |
                                        <i onClick={() => this.detail(item)}>详情</i>
                                        </b>
                                    </p>
                                    <p>{item.user_name}发布</p>
                                </div>
                            }) : this.state.questionsNew.map((item: Item) => {
                                return <div key={item.questions_id}>
                                    <b>{item.title}</b>
                                    <p>
                                        <span>{item.questions_type_text}</span>
                                        <span>{item.subject_text}</span>
                                        <span>{item.exam_name}</span>
                                        <b>
                                            <i onClick={() => this.addList(item)}>添加</i> |
                                            <i onClick={() => this.detail(item)}>详情</i>
                                        </b>
                                    </p>
                                    <p>{item.user_name}发布</p>
                                </div>
                            })
                        }
                    </div>
                </Drawer>
                <Button type="primary" onClick={() => this.addEvent()} className='add'>创建试题</Button>
            </div>
        )
    }
}
