/*
 * @Author: 李壮壮 
 * @Date: 2020-10-20 14:28:02 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-20 22:12:09
 */
import React, { Component } from 'react'
import { Slider ,Button,Skeleton,Divider} from 'antd';
import Markdown from 'react-markdown'
import {_examStudent,_examKark} from '@/api/user'
interface IProps{
    location?:any
}
interface IStater{
    scores:number,
    infor:any
}
export default class MarkDetail extends Component<IProps,IStater> {
    constructor(props:IProps){
        super(props);
        this.state={
            scores:0,
            infor:{}
        }
    }
    onChange(value: any){
        this.setState({
            scores:value
        })
    }
    onAfterChange(){

    }
    async gitInft(){
        const result = await _examStudent(this.props.location.state.id);
        if(result.data.code===1){
            this.setState({
                infor:result.data.data
            })
        }
        console.log(result)
    }
    componentDidMount(){
        console.log(this.props)
        this.gitInft()
    }

    async marking(){
        const result =await _examKark({score:this.state.scores,id:this.props.location.state.id});
        console.log(result)
    }
    render() {
        console.log(this.state.infor)
        return (
            <div className='markDefault'>
                <div className="markDefaultInfor">
                    <div className="left">
                        {
                           
                           this.state.infor.questions&& this.state.infor.questions.map((item: any,index:number)=>{
                                return <div className="paperInfor" key={item.questions_id}>
                                    <h5>{index+1}、{ item.title}</h5>
                                    <Markdown source={item.questions_stem} />
                                    <div className="answerTitle">
                                    <div className="answerTitleItem">
                                    <Divider plain>
                                      
                                    标准答案
                                      </Divider>
                                              
                                        </div>
                                        <div className="answerTitleItem">
                                           
                                             <Divider plain>
                                         学生答案
                                   
                                        
                                        </Divider>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="answer">
                                   
                                        <div className="studentAnswer">
                                        <Markdown source={item.student_answer} />
                                        </div>
                                        <div className="standardAnswer">
                                           <Markdown source={item.questions_answer} />
                                        </div>
                                    </div>
                                    
                                </div>
                            })
                        }
                    <div className="paperInfor">

                    </div>
                    </div>
                    <div className="right">
                       {  <h2 style={{marginTop:'20px',marginLeft:'20px'}}>{this.state.infor.student_name||''} </h2>}
                       <h3 style={{marginTop:'20px',marginLeft:'20px'}}>得分：{this.state.scores}</h3>

                    <Slider defaultValue={0} onChange={(value: any)=>this.onChange(value)} onAfterChange={()=>this.onAfterChange} style={{width:'80%', margin:'auto',marginTop:'20px',}} />
                    <Button type='primary' style={{marginTop:'20px',marginLeft:'20px'}} onClick={()=>{this.marking()}}>确定</Button>
                    </div>
                </div>
            </div>
        )
    }
}
