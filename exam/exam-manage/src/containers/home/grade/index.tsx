import React, { Component } from "react";
import { Button, Table } from "antd";
import { _getClassList } from "@/api/class";


class Class extends Component {
  state = {
    classList: [],
   
  };
  async componentDidMount() {
    let res = await _getClassList();
    if (res.data.code === 1) {
      this.setState({
        classList: res.data.data,
      });
    } else {
      alert("请求失败" + res.data.msg);
    }
  }
  render() {
    let { classList } = this.state;
    return (
      <div className="classmanager">
        <div className="content">
          <div className="top">
            <Button type="primary" size="large" className="addClassBtn">
              添加班级
            </Button>
          </div>
          <div className="list">
           
          </div>
        </div>
      </div>
    );
  }
}
export default Class;
