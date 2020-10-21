import React, { Component } from 'react'
import { _examExam } from '@/api/exam'
import { _subject, _examType, _questionsCondition,_examExamId } from '@/api/exam'

import { Button, Drawer, Select, Table, Tag, Space } from 'antd';
const { Option } = Select;
interface Item {
  exam_id: string,
  exam_name: string,
  subject_id: string,
  subject_text: string,
  questions_type_id: string,
  questions_type_text: string,
  [key: string]: any,
}
export default class ExamList extends Component {
  state = {
    examList: [], //试卷列表
    examType: [], //考试类型：
    subject: [],//题目类型：
    questions_type_id: '',
    exam_id: '',
    columns: [
      {
        title: '试卷信息',
        dataIndex: 'title',
        key: 'title',
        render: (text: any, record: any) => (
          <p >
            <span style={{margin:5 }}>{record.title}</span> <br/>
            <span style={{margin:5 }}>考试时间：{this.textDate(record.start_time,record.end_time)} {record.number}道题作弊0分</span>
          </p>
        )
      },
      {
        title: '班级',
        dataIndex: 'grade_name',
        key: 'grade_name',
        render: (text: any, record: any) => (
          <p>
            <span style={{margin:5 }}>考试班级</span><br/>
            <span style={{margin:5 }}>{record.grade_name.join(' ')}</span>
          </p>

        )
      },
      {
        title: '创建人',
        dataIndex: 'user_name',
        key: 'user_name',
      },
      {
        title: '开始时间',
        key: 'start_time',
        render: (text: any, record: any) => (
          <span>{this.dateFormat(record.start_time)}</span>
        )
      },
      {
        title: '结束时间',
        key: 'end_time',
        render: (text: any, record: any) => (
          <span>{this.dateFormat(record.end_time)}</span>
        )

      },
      {
        title: '操作',
        key: "subject_id",
        render: (text: any, record: any) => (
          <Space size="middle">
            <a onClick={()=>this.detail(record.exam_id)}>详情</a>
          </Space>
        ),

      },]
  }
  componentDidMount() {
    this.examExam()
    this.examType()
    this.subject()
  }
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
  dateFormat(data: any) {
    let date: any = new Date(parseInt(data))
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
  textDate(start: string, end: string) {
    let time = Number(end) - Number(start)
    var total = time / 1000;
    var day = Math.floor(total / (24 * 60 * 60));//计算整数天数
    var afterDay = total - day * 24 * 60 * 60;//取得bai算出du天数后剩余的秒zhi数
    var hour = Math.floor(afterDay / (60 * 60));//计算整数小时dao数
    var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
    var min = Math.floor(afterHour / 60);//计算整数分
    var afterMin = Math.floor(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);//取得算出分后剩余的秒数
    let res = [hour,min,afterMin].join(':')
    return res
  }

  //查询
  search() {
    this.questionsCondition()
  }
  //试卷列表
  async examExam() {
    const res = await _examExam()
    if (res.data.code) {
      this.setState({
        examList: res.data.exam
      })
      console.log(res.data.exam)
    }
  }
  //跳转详情页面
  async examExamId(exam_id:string) {
    const res = await _examExamId(exam_id)
    if (res.data.code) {
      this.setState({
        // examType: res.data.data
      })
      console.log(res)
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
  //全部试题 _questionsNew
  async subject() {
    const res = await _subject()
    if (res.data.code) {
      this.setState({
        subject: res.data.data
      })

    }

  }
  //搜索内容
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

    const res = await _questionsCondition(obj)
    if (res.data.code) {
      this.setState({
        questionsCondition: res.data.data
      })
    }
  }
  //跳转详情
  detail(exam_id:string){
    console.log(exam_id)
    this.examExamId(exam_id)
  }
  render() {
    return (
      <div className='gwExamList'>
        <h2>
          试卷列表
        </h2>
        <div className='gwExamList_cont_01'>
          <div>
            考试类型：<Select defaultValue="" style={{ width: 200 }} onChange={(e) => this.handleChange(e)}>
              {
                this.state.examType.map((item: Item) => {
                  return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                })
              }
            </Select>
          </div>
          <div>
            题目类型：<Select defaultValue="" style={{ width: 200 }} onChange={(e) => this.handleChange1(e)}>
              {
                this.state.subject.map((item: Item, ) => {
                  return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>

                })
              }
            </Select>
          </div>
          <Button type="primary" onClick={() => this.search()}>查询</Button>
        </div>
        <div className='gwExamList_cont_02'>
          {
          }
          <Table columns={this.state.columns} dataSource={this.state.examList} rowKey='exam_exam_id' />
        </div>
      </div>
    )
  }
}
