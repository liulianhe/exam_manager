/*
 * @Author: 李壮壮 
 * @Date: 2020-10-20 14:27:01 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-20 23:04:37
 */
import React, { Component } from 'react'
import {Table, Tag,Modal, Button, Space} from 'antd';
import {_getStudentExam} from '@/api/user'

interface IProps{
  location:any,
  history?:any 
};
interface IState{
    dataSource:{
      key:string, class: string; name: string; state: string; startTime: string; endTime: string; talentRate: string
      }[],
      columns : {
        title:string,
        dataIndex: string,
        key: string,
        render?:any
      } [
       
      ]
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
                    title: '成才率',
                    dataIndex: 'talentRate',
                    key: 'talentRate',
                  },
                 {
                 title:'操作',
                 dataIndex: 'action',
                 key: 'action',
                 render: (text:any, record:any) => (
                  <Space size="middle">
                    <a onClick={()=>this.toMark(record)}>批卷</a>
                  </Space>
                )
                 }
              ]
         }
    }
    componentDidMount(){
     this.getList()
    }
    async getList(){
      const result = await _getStudentExam(this.props.location.state.id);
      if(result.data.code===1){
        console.log(result)
        let arr: {key:string, class: string; name: string; state: string; startTime: string; endTime: string; talentRate: string; }[] =[];
        result.data.exam.forEach((item:any)=>{
          arr.push({
            key:item.exam_student_id,
            class:this.props.location.state.name,
            name:item.student_name,
            state:item.status?'已阅卷':'未阅',
            startTime:item.start_time,
            endTime:item.end_time,
            talentRate:'-'

          })
        })
        this.setState({
          dataSource:arr
        })
      }
      
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
                 <Table dataSource={this.state.dataSource} columns={this.state.columns} />;
            </div>
        )
    }
}
