import React, { Component } from 'react'
import AddEditQues  from "./compoents/addEditQues"
interface IProps {
    history:any,
    match:any
}
 class AddQuestions extends Component<IProps> {
    render() {
        return (
            <div>
                <AddEditQues title="添加试题" item={{}} />
            </div>
        )
    }
}
export default AddQuestions
