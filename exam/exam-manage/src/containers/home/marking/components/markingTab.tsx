/*
 * @Author: 李壮壮 
 * @Date: 2020-10-20 14:27:01 
<<<<<<< HEAD
 * @Last Modified by: lizhuangzhuang
 * @Last Modified time: 2020-10-21 15:41:57
 */
import React, { Component } from 'react'
import {Table, Button} from 'antd';
import {_getStudentExam} from '@/api/mark'
interface IProps{
  location?:any,
  history?:any ,
  // inquireId:string,
  dataSource:any[]
};
interface IState{
    dataSource:{
      key:string, class: string; name: string; state: string; startTime: string; endTime: string; score: string
      }[],
      columns : {
        title:string,
        dataIndex: string,
        key: string,
        render?:any
      }[]
}
export default class marlingTab extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
         this.state={
            dataSource :[],
              columns : [
                {
                  title: '班级',
                  dataIndex: 'class',
                  key: 'class',
                },
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '阅卷状态',
                  dataIndex: 'state',
                  key: 'state',
                },
                {
                  title: '开始时间',
                  dataIndex: 'startTime',
                  key: 'startTime',
                },
                {
                  title: '结束时间',
                  dataIndex: 'endTime',
                  key: 'endTime',
                },
                {
                  title: '分数',
                  dataIndex: 'score',
                  key: 'score',
                },
                {
                  title:'操作',
                  dataIndex: 'action',
                  key: 'action',
                  render: (text:any, record:any) => (
                    <Button size="middle" type='primary' onClick={()=>this.toMark(record)}>批卷</Button>
                )
              }]
         }
    }
    componentDidMount(){
     this.getList()
    }
    async getList(){
      
      
      this.setState({
            dataSource:this.props.dataSource
          })
    }
    toMark(record: any){
      this.props.history.push({
        pathname:'/home/examinationPapers',
        state:{
          id:record.key
        }
      })
    }
    
    render() {
        return (
            <div>
                {/* <Table dataSource={this.state.dataSource} columns={this.state.columns} />; */}
                {/* <Table style={{borderRadius:'20px'}} dataSource={this.state.dataSource} columns={this.state.columns}   /> */}
            </div>
        )
    }
=======
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-22 10:06:18
 */
import React, { Component } from 'react'
import { Button } from 'antd';
// import { _getStudentExam } from '@/api/mark'
interface IProps {
  location?: any,
  history?: any,
  // inquireId:string,
  dataSource: any[]
};
interface IState {
  dataSource: {
    key: string, class: string; name: string; state: string; startTime: string; endTime: string; score: string
  }[],
  columns: {
    title: string,
    dataIndex: string,
    key: string,
    render?: any
  }[]
}
export default class marlingTab extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      dataSource: [],
      columns: [
        {
          title: '班级',
          dataIndex: 'class',
          key: 'class',
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '阅卷状态',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: '开始时间',
          dataIndex: 'startTime',
          key: 'startTime',
        },
        {
          title: '结束时间',
          dataIndex: 'endTime',
          key: 'endTime',
        },
        {
          title: '分数',
          dataIndex: 'score',
          key: 'score',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text: any, record: any) => (
            <Button size="middle" type='primary' onClick={() => this.toMark(record)}>批卷</Button>
          )
        }]
    }
  }
  componentDidMount() {
    this.getList()
  }
  async getList() {


    this.setState({
      dataSource: this.props.dataSource
    })
  }
  toMark(record: any) {
    this.props.history.push({
      pathname: '/home/examinationPapers',
      state: {
        id: record.key
      }
    })
  }

  render() {
    return (
      <div>
        {/* <Table dataSource={this.state.dataSource} columns={this.state.columns} />; */}
        {/* <Table style={{borderRadius:'20px'}} dataSource={this.state.dataSource} columns={this.state.columns}   /> */}
      </div>
    )
  }
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
}
