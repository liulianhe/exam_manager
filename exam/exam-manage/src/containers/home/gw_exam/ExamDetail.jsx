import React, { Component } from 'react'

export default class ExamDetail extends Component {
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
                            this.state.list.map((item) => {
                                return <div key={item.questions_id} className='list_cont'>
                                    <b>{item.title}</b>
                                    <p>{item.questions_stem}</p>
                                    <p>{item.questions_answer}</p>
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