import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { _examType, _subject, } from '@/api/exam'
import { Input, Select, DatePicker, InputNumber, Space, Button } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface Item {
    exam_id: string,
    exam_name: string,
    subject_id: string,
    subject_text: string
}
interface IProps { //定义所需的相应接口
    onSave: any,
    onEdit: any,
    handlevisible: any,
    [key: string]: any,
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
    //创建
    async questions() {
        let obj: any = {
            title: this.el && this.el.value,
            subject_id: this.state.subject_id,
            exam_id: this.state.exam_id,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            number: this.state.number,
            // allTime:this.tab(this.state.start_time,this.state.end_time)
        }
        for (var i in obj) {
            if (!obj[i]) {
                return alert('请输入全部信息')
            }
        }

        this.props.history.push('/home/examEdit')
        this.props.exam.seteaxmAddInfo(obj)
    }
    //考卷名称：
    onChange(e: any) {
        // console.log('changed', e);
    }
    //选择考试类型：
    handleChange(value: any) {
        this.setState({
            exam_id: value
        })
    }
    //选择课程：
    handleChange1(value1: any) {
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
    dataonChange(value: any, dateString: any) {
    }
    dataonChange1(value: any, dateString: any) {
    }
    //考试时间：
    onOk(value: any) {
        this.setState({
            start_time: new Date(value._d).getTime()

        })
    }
    onOk1(value: any) {
        this.setState({
            end_time:  new Date(value._d).getTime()
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
    //所有时间
    tab(day1:string, day2:string) {
        //   在苹果上，时间格式最好是 是 2020/02/02 它是斜杠开头的
        let day11 = day1.replace(/-/g, "/");
        let day22 = day2.replace(/-/g, "/");

        var day_day1 = new Date(day11);
        var day_day2 = new Date(day22);

        let disparity = day_day2.getTime() - day_day1.getTime();
        // 转为分钟数的时候，可能会出现精度丢失;你需要注意下
        let min = Math.round(disparity / 1000 / 60);
        return min
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
                        <InputNumber style={{ width: 120, height: 30 }} min={3} max={10} defaultValue={3} onChange={(e) => this.onChange1(e)} />
                    </div>
                    <div>
                        <p><span>*</span> 考试时间：</p>
                        <DatePicker showTime onChange={() => this.dataonChange} onOk={(e) => this.onOk(e)} style={{ width: 250, height: 30 }} /> -&nbsp;&nbsp;
                        <DatePicker showTime onChange={() => this.dataonChange1} onOk={(e) => this.onOk1(e)} style={{ width: 250, height: 30 }} />

                    </div>
                    <Button type="primary" style={{ width: 100 }} onClick={() => this.questions()}>创建试卷</Button>
                </div>
            </div>
        );
    }
}

export default AddExam;