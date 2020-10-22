import React, { Component } from 'react'
import Markdown from 'react-markdown'
interface IProps{
    location:any
}
export default class ExamDetail extends Component<IProps> {
    state = {
        list: this.props.location.state
    }
    render() {
        return (
            <div className='gwExamDetail'>
                <h2>
                    试卷详情
            </h2>
                <div>
                    <div className='left'>
                        {
                            this.state.list.map((item:any) => {
                                return <div key={item.questions_id} className='list_cont'>
                                    <Markdown source={item.title} />
                                    <Markdown source={item.questions_stem} />
                                    <Markdown source={item.questions_answer} />
                                </div>
                            })
                        }
                    </div>
                    <div className='right'>

                    </div>
                </div>
            </div>
        )
    }
}