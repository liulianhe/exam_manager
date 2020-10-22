import React, { Component } from 'react'
interface Iprops {
    [key: string]: any
}
interface Item {
    questions_id: string
    title: string
    questions_stem: string
    questions_answer: string
}
export default class ExamDetail extends Component<Iprops> {
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
                            this.state.list.map((item: Item) => {
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