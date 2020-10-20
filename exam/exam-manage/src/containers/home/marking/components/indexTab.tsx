/*
 * @Author: 李壮壮 
 * @Date: 2020-10-19 17:53:17 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-20 21:45:09
 */
//@ts-nocheck
import React, { Component } from 'react'
import {Table, Tag, Space,Pagination} from 'antd';
import {_getMarkingClass} from '@/api/user'
import Marking from '../Marking';
interface IProps{

};
interface IState{
    dataSource:{
        key: string,
        className?: string,
        course:string,
        state:string,
        className2:string,
        talentRate:string
      }[],
      columns : {
        title:string,
        dataIndex: string,
        key: string,
        render?:any
      } [
       
      ]
}
export default class tab extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
         this.state={
            dataSource :[],
              
              columns : [
                {
                  title: '班级名',
                  dataIndex: 'className',
                  key: 'className',
                },
                {
                  title: '课程名',
                  dataIndex: 'course',
                  key: 'course',
                },
                {
                  title: '阅卷状态',
                  dataIndex: 'state',
                  key: 'state',
                },
                {
                    title: '课程名称',
                    dataIndex: 'className2',
                    key: 'className2',
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
                 render: (text, record) => (
                  <Space size="middle" onClick={()=>{this.mark(text,record)}}>
                    <a >批卷</a>
                  </Space>
                )
                 }
              ]
         }
    }
    componentDidMount(){
      this.getList()
    }
    mark(text,record){
      this.props.history.push({
        pathname:'/home/examPaperClassmate',
        state:{id:record.grade_id,name:record.className}
      })
     
    }
   async getList(){
      const result = await _getMarkingClass();
      if(result.data.code===1){
        console.log(result)
        let arr: { key: any; className: any; course: string; state: string; className2: any; talentRate: any; }[] =[]
        result.data.data.forEach((item: any,index:number)=>{
          arr.push({
            key: item.grade_id+item.grade_name,
            grade_id:item.grade_id,
            className: item.grade_name,
            course:item.subject_text,
            state:'',
            className2:item.grade_name,
            talentRate:item.room_text,
           
          })
        })
        this.setState({
          dataSource:arr
        })
      }
    }
    render() {
        
        return (
            <div>
                 <Table dataSource={this.state.dataSource} columns={this.state.columns}   />
                 {/* <Pagination showQuickJumper defaultCurrent={2} total={500}  /> */}
            </div>
        )
    }
}
