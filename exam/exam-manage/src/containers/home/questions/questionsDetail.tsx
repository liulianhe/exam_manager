import React, { Component } from 'react'
import { _searchList } from "../../../api/questions";
import { Tag } from 'antd';
import Markdown from 'react-markdown'
interface IProps { //定义所需的相应接口
    history: any,
    location: any,
    match: any,
}
interface State{
    test_del:any
}
class questionsDetail extends Component<IProps,State> {
    constructor(props: IProps) {
        super(props);
    }
    state:State = {
        test_del: {}
    }
    render() {
        const {test_del} =this.state
        // console.log(test_del.questions_stem&&test_del.questions_stem.split(" "))
        return (
            <div className="del">
                <h2>试题详情</h2>
                <div className="del_main">
                    <div className="del_left">
                        <p>出题人：{test_del.user_name}</p>
                        <p>题目信息</p>
                        <div className="tags_list">
                             <Tag color="blue">{test_del.questions_type_text}</Tag>
                             <Tag color="orange">{test_del.exam_name}</Tag>
                             <Tag color="cyan">{test_del.subject_text}</Tag>
                         </div>
                         <p>{test_del.title}</p>
                         <Markdown source={test_del.questions_stem} />
                    </div>
                    <div className="del_right">
                        <p>答案信息</p>
                       <Markdown source={test_del.questions_answer} />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.questionDetail()
    }
    async questionDetail() {
        let res = await _searchList({ questions_id: this.props.match.params.id  })
        this.setState({
            test_del: res.data.data[0]
        })

    }
}

export default questionsDetail
