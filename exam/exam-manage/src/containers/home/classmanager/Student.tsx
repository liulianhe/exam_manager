import React, { Component } from 'react'
import { _getStudentlist, _getClassesList, _getClassRoomList } from '../../../api/student';
import { Table, Row, Col, Input, Select, Button, Popconfirm } from 'antd';
import { IProps, IState } from './interface';
const array = require("lodash/array")
const style = { padding: '8px 0' };
const { Option } = Select;

class Student extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: [],
      classList: [],
      classRoom: [],
      studentUser: '',
      classRoomname: '请选择教室号',
      className: '请选择班级号',
      id: 0,
      text: '',
      visible: false,
      pageSize: 0,
      pagination: {
        defaultPageSize: 10,
        showTotal: (total: any) => `共 ${total} 条数据`,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['10', '15', '20', '30', '50', '100'],
        onShowSizeChange: (current: any, pageSize: any) =>
          (pageSize = pageSize),
      },
      columns: [
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
          render: (text:any, record:any) =>
          this.state.list.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>删除</a>
            </Popconfirm>
          ) : null,
        }
      ]
    }
  }

  handleDelete = (key:any) => {
    const dataSource = [...this.state.list];
    this.setState({ list: dataSource.filter(item => item.key !== key) });
  };


  // 删除
  del = (text: any) => {
    let list = this.state.list.filter((item) => item.student_id !== text.student_id);
    this.setState({
      list,
    })
  }

  componentDidMount() {
    this.getList();
    this.getClass();
    this.getClassroom();
  }
  // 搜索的关键字
  handleChangeinput = (e: any) => {
    this.setState({
      studentUser: e.target.value
    })
  }

  // 搜索
  search = () => {
      let arr:any =[]
      if (this.state.studentUser) {// 根据姓名搜索
         arr=[...arr,...this.state.list.filter(item => item.student_name === this.state.studentUser)]
      }
      if (this.state.className) {// 根据班级名搜索
        arr=[...arr,...this.state.list.filter(item => item.grade_name === this.state.className)]
      }
       if (this.state.classRoomname) {// 根据教室号搜索
        arr=[...arr,...this.state.list.filter(item => item.room_text === this.state.classRoomname)]
      }
      this.setState({
        list:array.uniq(arr)
      })
  }

  // 获取教室列表
  getClassroom = async () => {
    let results = await _getClassRoomList();
    if (results.data.code === 1) {
      this.setState({
        classRoom: results.data.data
      })
    }
  }

  // 获取班级列表
  getClass = async () => {
    let results = await _getClassesList();
    if (results.data.code === 1) {
      this.setState({
        classList: results.data.data
      })
    }
  }

  // 获取学生列表
  getList = async () => {
    let result = await _getStudentlist()
    if (result.data.code === 1) {
      let list = result.data.data.map((item: any, index: any) => {
        return { ...item, key: index }
      })
      this.setState({
        list: list
      })
    }
  }

  // 重置
  handleReset = () => {
    this.setState({
      studentUser: '',
      classRoomname: '',
      className: ''
    })
    this.getList()
  }
  // 班级名字
  getClassName = (event: any) => {
    this.setState({
      className: event
    }, () => {
      console.log(this.state.className, '班级名')
    })
  }

  // 教室号
  getClassRoomName2 = (event: any) => {
    // console.log(event)
    this.setState({
      classRoomname: event
    })
  };
  render() {
    const { list, pagination, classList, classRoom, studentUser, classRoomname, className, columns } = this.state;
    return (
      <div className="studentmanager">
        <div className="scroll">
          <Row>
            <Col span={24}><h2>学生管理</h2></Col>
          </Row>
          <Row>
            <Col span={24}> <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div style={style} ><Input style={{ width: 200 }} placeholder="输入学生姓名" value={studentUser} onChange={(e) => this.handleChangeinput(e)} /></div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <Select
                    style={{ width: 240 }}
                    placeholder="请选择教室号"
                    defaultValue={classRoomname}
                    onChange={(e) => this.getClassRoomName2(e)}
                  >
                    {classRoom.map(item => (
                      <Option value={item.room_text} key={item.room_id}>{item.room_text}</Option>
                    ))}
                  </Select>
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div style={style}>
                  <Select
                    style={{ width: 240 }}
                    placeholder="请选择班级号"
                    defaultValue={className}
                    onChange={(e) => this.getClassName(e)}
                  >
                    {classList.map(item => (
                      <Option value={item.grade_name} key={item.grade_id}>{item.grade_name}</Option>
                    ))}
                  </Select>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={style}> <Button type="primary" onClick={() => this.search()}>搜索</Button> <Button type="primary" onClick={() => this.handleReset()} >重置</Button></div>
              </Col>
            </Row></Col>
          </Row>
          <Table className="tables"
            dataSource={list}
            columns={columns}
            pagination={pagination}
          />
        </div>
      </div>
    )
  }
}

export default Student