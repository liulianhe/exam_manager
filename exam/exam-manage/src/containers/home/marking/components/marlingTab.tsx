import React, { Component } from 'react'
import {Table, Tag, Space} from 'antd';
import {_getStudentExam} from '@/api/user'
interface IProps{
  location: any
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
                    <a href="#">批卷</a>
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
        let arr: {key:string, class: string; name: string; state: string; startTime: string; endTime: string; talentRate: string; }[] =[];
        result.data.exam.forEach((item:any)=>{
          arr.push({
            key:item.student_id,
            class:this.props.location.state.name,
            name:item.student_name,
            state:'待阅卷',
            startTime:item.start_time,
            endTime:item.end_time,
            talentRate:'-'

          })
        })
        this.setState({
          dataSource:arr
        },()=>{
          console.log(arr)
        })
      }
      console.log(result)
    }
    render() {
        return (
            <div>
                 <Table dataSource={this.state.dataSource} columns={this.state.columns} />;
            </div>
        )
    }
}
