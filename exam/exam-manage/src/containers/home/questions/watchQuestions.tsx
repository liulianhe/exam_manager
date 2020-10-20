import React, { Component } from 'react';
import { _getTestList } from '../../../api/questions/show'
class ShowQuestions extends Component {
    state={
        course_list:[]
    }
    render() {
        return (
            <div className="ShowQuestions">
                <h1>查看试题</h1>
                <div className="search_main">

                </div>
                <div className="show_list">

                </div>
            </div>
        );
    }

    componentDidMount(){
      this.getTestList()
    }

  async getTestList(){
    let res= await _getTestList()
       console.log(res)
    }
}

export default ShowQuestions;