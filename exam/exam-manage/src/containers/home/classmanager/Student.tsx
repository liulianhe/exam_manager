import React, { Component } from 'react'
import require from '../../../utils/require';
import { Table, Row, Col, Input, Select, Button, } from 'antd';
const style = { padding: '8px 0' };
const { Option } = Select;

interface IProps {
  props: any,
}
interface IState {
  list: any[],
  classList: any[],
  classRoom: any[],
  studentUser: string,
  classRoomname: string,
  className: string,
  columns:any[],
  id:number,
  visible: boolean,
  text:string,
}
export default class Student extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: [],
      classList: [],
      classRoom: [],
      studentUser: '',
      classRoomname: '请选择教室号',
      className: '请选择班级号',
      id:0,
      text:'',
      visible: false,
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
          render: (text:any) =>{
            return  <Button onClick={()=>this.del(text)} >删除</Button>
          }
        }
      ]
    }
  }
  del = (text:any) => {
      let list = this.state.list.filter((item)=>item.student_id !== text.student_id);
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
    }, () => {
      console.log(this.state.studentUser)
    })

  }

  // 搜索
  search = () => {

    if(this.state.studentUser){// 根据姓名搜索
      this.setState({
        list: this.state.list.filter(item => item.student_name === this.state.studentUser)
      })
      return
    }
    if (this.state.classRoomname) {// 根据教室号搜索
      this.setState({
        list: this.state.list.filter(item => item.room_text === this.state.classRoomname)
      })
      return
    }
     if(this.state.className){// 根据班级名搜索
      this.setState({
        list: this.state.list.filter(item => item.grade_name === this.state.className)
      })
      return
    } 

    if(this.state.studentUser === '' && this.state.classRoomname === '' && this.state.className === ''){
      return
    }
  }
  // 获取教室列表
  getClassroom = () => {
    require.get('/manger/room').then(res => {
      if (res.data.code === 1) {
        this.setState({
          classRoom: res.data.data
        })
      }
    })
  }
  // 获取班级列表
  getClass = () => {
    require.get('/manger/grade').then(res => {
      if (res.data.code === 1) {
        this.setState({
          classList: res.data.data
        })
      }
    })
  }

  // 获取学生列表
  getList = () => {
    require.get('/manger/student').then(res => {
      if (res.data.code === 1) {
        let list = res.data.data.map((item:any,index:any)=>{
                  return {...item,key:index}
        })
        this.setState({
          list: list
        })
      }

    })
  }
  // 重置
  restlist = () => {
    this.setState({
      studentUser: '',
      classRoomname: '',
      className: ''
    })
    this.getList()
  }

  getClassName = (event: any) => {
    console.log(event)
    this.setState({
      classRoomname: event
    })
  };
  
  // 教室号
  getClassName2 = (event: any) => {
    console.log(event)
    this.setState({
      className: event
    })
  };

 


  render() {
    const { list, classList, classRoom, studentUser, classRoomname, className, columns } = this.state;
    return (
      <div className="studentmanager">
        <Row>
          <Col span={24}><h1>学生管理</h1></Col>
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
                  onChange={(e)=>this.getClassName(e)}
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
                  onChange={(e)=>this.getClassName2(e)}
                >
                  {classList.map(item => (
                    <Option value={item.grade_name} key={item.grade_id}>{item.grade_name}</Option>
                  ))}
                </Select>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}> <Button type="primary" onClick={() => this.search()}>搜索</Button> <Button type="primary" onClick={() => this.restlist()} >重置</Button></div>
            </Col>
          </Row></Col>
        </Row>
        <Table className="tables"
          dataSource={list}
          columns={columns}
        />
      
      </div>
    )
  }
}
