import React, { Component } from 'react'
import { _examExam } from '@/api/exam'
import { _subject, _examType, _questionsCondition,_examExamId } from '@/api/exam'
import { dateFormat ,textDate} from '@/config/homeExam'
import { Button, Select, Table, Tag, Space } from 'antd';
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
interface Iprops{
  [key:string]:any
}
interface Record{
  title:string
  start_time:string
  end_time:string
  number:number
  grade_name:string[]
  exam_exam_id:string
}
interface ObJ{
  questions_type_id:string
  exam_id:string
}
export default class ExamList extends Component<Iprops> {
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
        render: (text: string, record: Record) => (
          <p >
            <span style={{margin:5 }}>{record.title}</span> <br/>
            <span style={{margin:5 }}>考试时间：{textDate(record.start_time,record.end_time)} {record.number}道题作弊0分</span>
          </p>
        )
      },
      {
        title: '班级',
        dataIndex: 'grade_name',
        key: 'grade_name',
        render: (text: string, record: Record) => (
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
        render: (text: string, record: Record) => (
          <span>{dateFormat(record.start_time)}</span>
        )
      },
      {
        title: '结束时间',
        key: 'end_time',
        render: (text: string, record: Record) => (
          <span>{dateFormat(record.end_time)}</span>
        )

      },
      {
        title: '操作',
        key: "subject_id",
        render: (text: string, record: Record) => (
          <Space size="middle">
            <a onClick={()=>this.detail(record.exam_exam_id)}>详情</a>
          </Space>
        ),

      },]
  }
  componentDidMount() {
    this.examExam()
    this.examType()
    this.subject()
  }
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
    }
  }
  //跳转详情页面
  async examExamId(exam_id:string) {
    const res = await _examExamId(exam_id)
    if (res.data.code) {
      this.props.history.push({
        pathname:'/home/ExamDetail',
        state:res.data.data.questions
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
    let obj = {
    }
    if (this.state.questions_type_id) {
      (obj as ObJ).questions_type_id = this.state.questions_type_id
    }
    if (this.state.exam_id) {
      (obj as ObJ).exam_id = this.state.exam_id
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
