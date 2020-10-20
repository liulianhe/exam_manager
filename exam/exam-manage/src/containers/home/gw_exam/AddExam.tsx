import React, { Component } from 'react';
import { _examType, _subject, } from '@/api/exam'
// import { FormComponentProps } from '@/node_modules/antd/lib/form/Form' 
import { Input, Select, DatePicker, InputNumber, Space, Button } from 'antd';
const { Option } = Select;
interface Item {
    exam_id: string,
    exam_name: string,
    subject_id: string,
    subject_text: string
}
interface IProps { //定义所需的相应接口
    onSave: any,
    onEdit: any,
    handlevisible: any
}
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
    async questions() {
    }


    //考卷名称：
    onChange(e: any) {
        console.log('changed', e);
    }
    //选择考试类型：
    handleChange(value: any) {
        console.log(value)
    }
    //选择课程：
    handleChange1(value1: any) {
        console.log(value1)
    }

    //选择题量：
    onChange1(value: any) {
        this.setState({
            number: value
        })
        console.log('changed', value);
    }
    //考试时间：
    dataonChange(value: any, dateString: any) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    dataonChange1(value: any, dateString: any) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    //考试时间：
    onOk(value: any) {
        console.log(1111)
        console.log(value)

    }
    onOk1(value: any) {
        console.log(value)

    }

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
                    添加考试{this.state.end_time}
                </h2>
                <div className='exam_cont'>
                    <div>
                        <p><span>*</span> 考卷名称：</p>
                        <input placeholder="" onChange={(e) => this.onChange(e)} style={{ width: 400 }} />
                    </div>
                    <div>
                        <p><span>*</span> 选择考试类型：</p>
                        <Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange(e)}>
                            {
                                this.state.examType.map((item: Item) => {
                                    return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <p><span>*</span> 选择课程：</p>
                        <Select defaultValue="" style={{ width: 120 }} onChange={(e) => this.handleChange1(e)}>
                            {
                                this.state.subject.map((item: Item) => {
                                    return <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
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
                        <DatePicker showTime onChange={() => this.dataonChange} onOk={() => this.onOk} />
                        <DatePicker showTime onChange={() => this.dataonChange1} onOk={() => this.onOk1} />
                    </div>
                    <Button type="primary" style={{ width: 100 }} onClick={() => this.questions()}>提交</Button>
                </div>
            </div>
        );
    }
}

export default AddExam;