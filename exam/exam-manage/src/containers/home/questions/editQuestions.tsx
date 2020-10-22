import React, { Component } from 'react'
import AddEditQues  from "./compoents/addEditQues"
interface IProps {
    history:any,
    match:any,
    location:any
}

class EditQuestions extends Component<IProps> {
    render() {
        console.log(this.props)
        return (
            <div>
                 <AddEditQues  title="编辑试题" item={this.props.location.state.item}  />
            </div>
        )
    }
}

export default  EditQuestions
