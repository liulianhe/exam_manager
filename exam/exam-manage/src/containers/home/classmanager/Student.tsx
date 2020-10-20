import React, { Component } from 'react'
import require from '../../../utils/require';
import { Table, Row, Col, Input, Select, Button, message } from 'antd';
const style = { padding: '8px 0' };
const { Option } = Select;
const columns = [
  {
    title: '姓名',
    dataIndex: 'student_name',
    key: '1',
  },
  {
    title: '学号',
    dataIndex: 'student_id',
    key: '2',
  },
  {
    title: '班级',
    dataIndex: 'grade_name',
    key: '3',
  },
  {
    title: '教室',
    dataIndex: 'room_text',
    key: '4',
  },
  {
    title: '密码',
    dataIndex: 'student_pwd',
    key: '5',
  },
  {
    title: '操作',
    key: '6',
    render: () => <a>删除</a>,
  },
];
function handleChange(value: any) {
  console.log(`selected ${value}`);
}

function handleChange2(value: any) {
  console.log(`selected ${value}`);
}
interface IProps {
  props: any,
}
interface IState {
  list: any[],
  classList:any[],
  classRoom:any[]
}
export default class Student extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: [],
      classList: [],
      classRoom:[]
    }
  }
  componentDidMount() {
    this.getList();
    this.getClass();
    this.getClassroom();
  }
  // 获取教室列表
  getClassroom = () => {
    require.get('/manger/room').then(res=>{
      console.log(res.data,'************')
      if (res.data.code === 1) {
        this.setState({
          classRoom: res.data.data
        })
        message.success(res.data.msg);
      }
    })
  }
  // 获取班级列表
  getClass = () => {
    require.get('/manger/grade').then(res=>{
      if (res.data.code === 1) {
        this.setState({
          classList: res.data.data
        })
        message.success(res.data.msg);
      }
    })
  }
  // 获取学生列表
  getList = () => {
    require.get('/manger/student').then(res => {
      // console.log(res.data)
      if (res.data.code === 1) {
        this.setState({
          list: res.data.data
        })
        message.success(res.data.msg);
      }

    })
  }
  render() {
    const { list, classList, classRoom } = this.state;
    return (
      <div className="studentmanager">
        <Row>
          <Col span={24}><h1>学生管理</h1></Col>
        </Row>
        <Row>
          <Col span={24}> <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <div style={style} ><Input style={{width:200}} placeholder="输入学生姓名" /></div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}><Select placeholder="请选择教室号" style={{ width: 200 }} onChange={handleChange}>
                {
                  classList.map((item,index)=>{
                  return <Option key={index} value={item.room_text}>{item.room_text}</Option>
                  })
                }
              </Select></div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div style={style}><Select placeholder="班级名" style={{ width: 200 }} onChange={handleChange2}>
              {
                  classList.map((item,index)=>{
                  return <Option key={index} value={item.grad_name}>{item.grade_name}</Option>
                  })
                }
              </Select></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}> <Button type="primary">搜索</Button> <Button type="primary">重置</Button></div>
            </Col>
          </Row></Col>
        </Row>
        <Table dataSource={list} pagination={{defaultCurrent:20}} columns={columns} />;
      </div>
    )
  }
}
