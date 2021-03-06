import React, { Component } from 'react'
import { Button, Drawer, Select, Modal, notification } from 'antd';
import { inject, observer } from 'mobx-react';
import { _subject, _examType, _getQuestionsType, _questionsNew, _questionsCondition, _examExamPut } from '@/api/exam'
import { dateFormat } from '@/config/homeExam'
import Markdown from 'react-markdown'
const { Option } = Select;
interface IProps { //定义所需的相应接口

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
interface AddCont {
    title: string
    questions_stem: string
    questions_answer: string
    exam_id: string
}
interface OBJ {
    questions_type_id: string
    subject_id: string
    exam_id: string
}
interface State {
    visible: boolean
    childrenDrawer: boolean
    subject: string[]
    examType: string[]
    questionsType: string[]
    questionsNew: string[]
    questionsCondition: string[]
    active: number
    addCont: any[]
    detailCont: { [key: string]: any }
    subject_id: string
    exam_id: string
    questions_type_id: string
    questions_id: string
    modal1Visible: boolean
    modal2Visible: boolean
    visibleOpen: boolean
    examTempte: string
}
@inject('exam')
@observer
export default class ExamEdit extends Component<IProps, State> {
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
        examTempte: '',//暂存中间变量 存是否删除的内容
        subject_id: '',
        exam_id: '',
        questions_type_id: '',
        questions_id: "",
        modal1Visible: false,
        modal2Visible: false,
        visibleOpen: false
    };
    componentDidMount() {
        this.setState({
            addCont: this.props.location.state.questions
        })
    }
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

    setModal1Visible(modal1Visible: boolean) {
        let a = this.state.addCont.filter((item: Item) => (this.state.detailCont as AddCont).exam_id === item.id)
        if (a.length <= 0) {
            let aa = [...this.state.addCont, this.state.detailCont]
            this.setState({
                addCont: aa,
                modal1Visible: modal1Visible
            })
        }
    }

    setModal2Visible(modal2Visible: boolean) {
        this.setState({ modal1Visible: modal2Visible });
    }
    showModal = () => {
        this.setState({
            visibleOpen: true,
        });
    };

    handleOk = (e: any) => {
        console.log(e);
        let d = this.state.addCont
        this.setState({
            visibleOpen: false,
            addCont: d.filter((item: Item) => this.state.examTempte !== item.questions_id)
        });

    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visibleOpen: false,
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

    async questionsCondition() {
        let obj = {

        }
        if (this.state.questions_type_id) {
            (obj as OBJ).questions_type_id = this.state.questions_type_id
        }
        if (this.state.exam_id) {
            (obj as OBJ).exam_id = this.state.exam_id
        }
        if (this.state.subject_id) {
            (obj as OBJ).subject_id = this.state.subject_id
        }
        const res = await _questionsCondition(obj)
        if (res.data.code) {
            this.setState({
                questionsCondition: res.data.data
            })
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
    //创建试卷
    async examExamPut(id: string[]) {
        let exam_id = this.props.location.state.exam_exam_id
        let questions_ids = id.splice(0, this.props.location.state.number)
        const res = await _examExamPut(questions_ids, exam_id)
        if (res.data.code) {

            this.props.history.push('/home/examList')
        }

    }
    //查询
    search() {
        this.questionsCondition()
    }
    //选择考试类型：
    handleChange(value: string) {
        this.setState({
            exam_id: value
        })
    }
    handleChange1(value: string) {
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
            detailCont: item,
            modal1Visible: true
        })

    }
    //提示语
    openNotification = () => {
        notification.info({
            message: `试题不能为空 `,

        });
    };
    //创建事件
    addEvent() {
        let arr: any = []
        this.state.addCont.length && this.state.addCont.forEach((item: Item) => arr.push(item.questions_id))
        arr.length ?
            this.examExamPut(arr) : this.openNotification()
    }
    //删除添加试卷数组的
    delEvent(id: string) {

        this.setState({
            examTempte: id,
            visibleOpen: true
        })

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
                        <h3>{this.props.exam.eaxmAddInfo.title}</h3>
                        {/* {this.props.exam.eaxmAddInfo.allTime} */}
                        <p>考试时间：1:30 监考人：旺仔 考试时间：{dateFormat(this.props.exam.eaxmAddInfo.start_time)} 阅卷人：旺仔</p>
                    </div >
                    {
                        this.state.addCont && this.state.addCont.map((item: Item, index: number) => {
                            return <div key={item.questions_id} className='list_cont'>
                                <i onClick={() => this.delEvent(item.questions_id)}>删除</i>
                                <Markdown source={index + 1 + '.' + item.title} />

                                <Markdown source={item.questions_stem} />
                                <Markdown source={item.questions_answer} />
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
                                className={this.state.active === 0 ? 'spanclass' : ''}
                            >all</span>
                            {
                                this.state.subject.map((item: Item, index) => {
                                    return <span key={item.subject_id}
                                        onClick={() => this.activeEvent(index + 1, item.subject_id)}
                                        id={this.state.active === index + 1 ? 'spanclass' : ''}
                                        className={this.state.active === 0 ? 'spanclass' : ''}
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
                <Button type="primary" onClick={() => this.addEvent()} className='add'>
                    创建试题</Button>

                <Modal
                    title="详情"
                    style={{ top: 50, width: 700 }}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <div>
                        <Markdown source={(this.state.detailCont as AddCont).title} />
                        <Markdown source={(this.state.detailCont as AddCont).questions_stem} />
                        <Markdown source={(this.state.detailCont as AddCont).questions_answer} />
                    </div>
                </Modal>
                <Modal
                    title="提示"
                    visible={this.state.visibleOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>是否删除该试卷？</p>

                </Modal>
                <br />
            </div>
        )
    }
}
