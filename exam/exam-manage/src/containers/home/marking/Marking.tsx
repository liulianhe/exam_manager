/*
 * @Author: 李壮壮 
 * @Date: 2020-10-19 20:44:57 
 * @Last Modified by: lizhuangzhuang
 * @Last Modified time: 2020-10-22 13:37:50
 */
import React, { Component } from 'react'
import {Select,Table, Button} from 'antd'
// import Tab from './components/markingTab'
import {_getMarkingClass,_getStudentExam} from '@/api/mark'
const {Option} = Select
interface IProps{
    location?:any,
    history?:any ,
    // inquireId:string,
    dataSource:any[]
  };
  interface IState{
        classList:any[],
        inquireId:'',
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
export default class Marking extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state={
            classList:[],//班级列表存储
            inquireId:'',//查询班级id存储
            dataSource:[],//表格数据存储
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
    async  getClassList(){
        const result =await _getMarkingClass();
        if(result.data.code===1){
             this.setState({
            classList:result.data.data
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

    componentDidMount(){
       this.getClassList();//初始化获取待批班级学生列表
       this.inquire(this.props.location.state.id)//调用通过查询获取待批班级学生列表方法
       console.log(this.props)
    }

    getClassName(value: any,option:any){
        this.setState({
            inquireId:option.key
        })
        console.log(value,option)
    }

    //通过查询获取待批班级学生列表
    async inquire(id: string){
        const result =await _getStudentExam(id);
        if(result.data.code===1){
            let arr: {key:string, class: string; name: string; state: string; startTime: string; endTime: string; score: string; }[] =[];
            result.data.exam.forEach((item:any)=>{
              arr.push({
                key:item.exam_student_id,
                class:this.props.location.state.name,
                name:item.student_name,
                state:item.status?'已阅卷':'未阅',
                startTime:item.start_time,
                endTime:item.end_time,
                score:item.status?item.score:'未阅'
              })
            })
            this.setState({
              dataSource:arr
            })
          }
    }
    render() {
        return (
            <div className='marking'>
                <h3>待批试卷</h3>
                <h2>待批试卷</h2>
                <div className="inquire">
                    <label htmlFor="" style={{margin:30,display:'block'}}>状态：
                        <Select defaultValue="" className="select-before" style={{width:'150px'}}>
                        </Select>
                    </label>
                    <label htmlFor="" style={{margin:20,display:'block'}} >班级：
                        <Select defaultValue="" className="select-before" style={{width:'150px'}} onChange={(value,option)=>{this.getClassName(value,option)}}> 
                            {
                                this.state.classList.map((item)=>{
                                    return <Option key={item.grade_id}  value={item.grade_name}>{item.grade_name} </Option>
                                })
                            }
                        </Select>
                    </label>
                        <Button type="primary" onClick={()=>this.inquire(this.state.inquireId)} style={{width:'150px'}}>查询</Button>
                    </div>
                    <div className="mainList">
                          <Table style={{borderRadius:'20px'}} dataSource={this.state.dataSource} columns={this.state.columns}   />
                    </div>
            </div>
        )
    }
}
