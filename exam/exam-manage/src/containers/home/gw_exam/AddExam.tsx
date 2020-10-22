import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { _examType, _subject, _examExamP, } from '@/api/exam'
import { Select, DatePicker, InputNumber, Button, notification } from 'antd';
const { Option } = Select;

interface Item {
    exam_id: string,
    exam_name: string,
    subject_id: string,
    subject_text: string
}
interface IProps { //定义所需的相应接口
    [key: string]: any,
}
interface ObJ {
    title: string
    subject_id: string
    exam_id: string
    start_time: string
    end_time: string
    number: string
}
@inject('exam')
@observer
class AddExam extends Component<IProps> {
    state = {
        examType: [], //考试类型
        subject: [],//选择课程
        title: '',//题目标题
        subject_id: '',//课程id
        exam_id: '',//考试id
        start_time: '',//开始时间
        end_time: "",//结束时间
        number: "",//试题数量
        hrefData: {},//跳转后的href
        isF: false,//
    }
    el!: HTMLInputElement | null;
    componentDidMount() {
        this.examType()//考试类型
        this.subject()//选择课程
    }
    async examType() {
        const res = await _examType()
        if (res.data.code) {
            this.setState({
                examType: res.data.data
            })
        }
    }
    async subject() {
        const res = await _subject()
        if (res.data.code) {
            this.setState({
                subject: res.data.data
            })
        }
    }
    async examExamP(obj: {}) {
        const res = await _examExamP(obj)
        if (res.data.code) {
            this.setState({
                hrefData: res.data.data
            })
        }
    }
    openNotification = () => {
        notification.info({
            message: ` 请输入信息`,
            description:
                '',
        });
    };
    //创建
    async questions() {
        let obj:any= {
            title: this.el && this.el.value,
            subject_id: this.state.subject_id,
            exam_id: this.state.exam_id,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            number: this.state.number,
        }
        for (var i in obj) {
            if (!obj[i]) {
                return this.openNotification()
            }
        }

        const res = await _examExamP(obj)
        if (res.data.code) {
            this.props.history.push({
                pathname: '/home/examEdit',
                state: res.data.data
            })
        }

        this.props.exam.seteaxmAddInfo(obj)
    }
    //考卷名称：
    onChange(e: any) {
    }
    //选择考试类型：
    handleChange(value: string) {
        this.setState({
            exam_id: value
        })
    }
    //选择课程：
    handleChange1(value1: string) {
        this.setState({
            subject_id: value1
        })
    }

    //选择题量：
    onChange1(value: any) {
        this.setState({
            number: value
        })
    }
    //考试时间：
    dataonChange(value: string, dateString: string) {
    }
    dataonChange1(value: string, dateString: string) {
    }
    //考试时间：
    onOk(value: any) {
        this.setState({
            start_time: new Date(value._d).getTime()

        })
    }
    onOk1(value: any) {
        this.setState({
            end_time: new Date(value._d).getTime()
        })
    }
    // 2020-10-22 17:22 格式
    dateFormat(date: any) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const second = date.getSeconds()
        const updateDate = year + '-' + this.fix(month, 2) + '-' + this.fix(day, 2) + ' ' + this.fix(hour, 2) + ':' + this.fix(minutes, 2) + ':' + this.fix(second, 2)
        return updateDate
    }
    fix(num: number, length: number) { // 两位补0
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num
    }

    render() {
        return (
            <div className='gw_addexam'>

                <h2>
                    添加考试
                </h2>
                <div className='exam_cont'>
                    <div>
                        <p><span>*</span> 考卷名称：</p>
                        <input placeholder="" onChange={(e) => this.onChange(e)} style={{ width: 400 }} ref={el => this.el = el} />
                    </div>
                    <div>
                        <p><span>*</span> 选择考试类型：</p>
                        <Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange(e)}>
                            {
                                this.state.examType.map((item: Item) => {
                                    return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <p><span>*</span> 选择课程：</p>
                        <Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange1(e)}>
                            {
                                this.state.subject.map((item: Item) => {
                                    return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                })
                            }
                        </Select>

                    </div>
                    <div>
                        <p><span>*</span> 选择题量：</p>
                        <InputNumber style={{ width: 120, height: 30 }} min={3} max={10} onChange={(e) => this.onChange1(e)} />
                    </div>
                    <div>
                        <p><span>*</span> 考试时间：</p>
                        <DatePicker showTime onChange={() => this.dataonChange} onOk={(e) => this.onOk(e)} style={{ width: 250, height: 30 }} /> -&nbsp;&nbsp;
                        <DatePicker showTime onChange={() => this.dataonChange1} onOk={(e) => this.onOk1(e)} style={{ width: 250, height: 30 }} />

                    </div>
                    <Button type="primary" style={{ width: 100 }} onClick={() => this.questions()}>

                        创建试卷</Button>

                </div>
            </div>
        );
    }
}

export default AddExam;