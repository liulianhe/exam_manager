/*
 * @Author: lizhuangzhuang 
 * @Date: 2020-10-21 10:32:41 
 * @Last Modified by: lizhuangzhuang
 * @Last Modified time: 2020-10-21 16:20:08
 */

import React, { Component } from 'react'

import Markdown from 'react-markdown'
import { Slider ,Button,Divider,Tag,Modal} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import {_examStudent,_examKark} from '@/api/mark';

const { confirm } = Modal;
interface IProps{
    location?:any,
    history?:any
}
interface IStater{
    scores:number,
    infor:any
}
export default class MarkDetail extends Component<IProps,IStater> {
   
    constructor(props:IProps){
        super(props);
        this.state={
            scores:0,//批卷分数
            infor:{} //批卷详情数据存储
        }
    }
    onChange(value: any){
        this.setState({
            scores:value
        })
    }
    onAfterChange(){}
    async gitInft(){
        /**
         * 获取批卷详情数据
         * @Parameters 学生考试id
         */
        //
        const result = await _examStudent(this.props.location.state.id);
        if(result.data.code===1){
            this.setState({
                infor:result.data.data
            })
        }
    }
    componentDidMount(){
        this.gitInft()
    }
    async marking(){
        //弹出确认对话框方法
        this.showConfirm();
    }
    destroyAll(){
        Modal.destroyAll();
    }
    showConfirm(){
        let _this =this
        confirm({
            icon: <QuestionCircleOutlined />,
            content: <div ><h3>确定提交试卷结果?</h3><p>分数值是:{this.state.scores}分</p></div>,
            centered:true,
            keyboard:true,
            okText:'确认',
            okType:'primary',
            cancelText:'取消',
            
           async onOk(){
                 const result =await _examKark({score:_this.state.scores,id:_this.props.location.state.id});
                 _this.props.history.push({
                     pathname:'/home/examPaperClassmate',
                     state:{id:_this.state.infor.grade_id}
                 })
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    render() {
        return (
            <div className='markDefault'>
                <div className="markDefaultInfor">
                    {/* 试卷信息 */}
                    <div className="left">
                        {
                           this.state.infor.questions&& this.state.infor.questions.map((item: any,index:number)=>{
                                return <div className="paperInfor" key={item.questions_id}>
                                    <h2>{index+1}、{ item.title} <Tag color="processing">{item.questions_type_text}</Tag></h2>
                                    <Markdown source={item.questions_stem} />
                                    <div className="answerTitle">
                                        <div className="answerTitleItem"><Divider plain>标准答案</Divider>   </div>
                                        <div className="answerTitleItem"><Divider plain>学生答案</Divider></div>
                                    </div>
                                    <div className="answer">
                                        <div className="studentAnswer"><Markdown source={item.student_answer} /></div>
                                        <div className="standardAnswer"><Markdown source={item.questions_answer} /></div>
                                    </div>    
                                </div>
                            })
                        }
                    <div className="paperInfor"></div>
                    </div>

                    {/* 学生信息和批卷分数 */}
                    <div className="right">
                       {<h2 style={{marginTop:'20px',marginLeft:'20px'}}>{this.state.infor.student_name||''} </h2>}
                        <h3 style={{marginTop:'20px',marginLeft:'20px'}}>得分：{this.state.scores}</h3>
                        <Slider defaultValue={0} onChange={(value: any)=>this.onChange(value)} onAfterChange={()=>this.onAfterChange} style={{width:'80%', margin:'auto',marginTop:'20px',}} />
                        <Button type='primary' style={{marginTop:'20px',marginLeft:'20px'}} onClick={()=>{this.marking()}}>确定</Button>
                    </div>
                </div>
            </div>
        )
    }
}
