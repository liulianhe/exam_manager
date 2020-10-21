import React, { Component } from "react";
import { Button, Table, Modal, Input, Select ,Row,Col,} from "antd";

import {_getClassList,_delClassItem,_getClassName} from "@/api/grade";// _getClassRoom,// _getClassName,
const { Option } = Select;

class Class extends Component {
  state = {
    classRoom: [], //所有教室列表
    className: [], //所有课程列表
    classList: [], //所有班级列表
    visible: false,
    columns: [
      //tabel表头
      {
        title: "班级名",
        dataIndex: "grade_name",
        key: "grade_id",
      },
      {
        title: "课程名",
        dataIndex: "subject_text",
        key: "subject_id",
      },
      {
        title: "教师号",
        dataIndex: "room_text",
        key: "room_id",
      },
      {
        title: "操作",
        render: (item: any) => {
          return (
            <div>
              <a className="edit"  onClick={() => this.showModal()}>修改</a>|
              <a onClick={() => this.delClassItem(item.grade_id)}>删除</a>
            </div>
          );
        },
      },
    ],
  };
  async delClassItem(id: string) {
    //删除班级
    let res = await _delClassItem(id);
    console.log(res, "del");
  }
  showModal = () => {
    //显示对话框
    this.setState({
      visible: true,
    });
  };
  handleOk = (e: any) => {
    //确定对话框
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    //取消对话框
    this.setState({
      visible: false,
    });
  };
  async componentDidMount() {
    //获取所有班级请求
    let res = await _getClassList();
    // let res2 = await _getClassRoom();
    // console.log(res2,'res2')
    if (res.data.code === 1) {
      let i = 0;
      let data = res.data.data.map((item: any) => {
        return { ...item, key: i++ };
      });
      this.setState({
        classList: data,
      });
      this.setState({
        classRoom: data,
      });
    } else {
      alert("请求失败" + res.data.msg);
    }
    //获取所有教室请求

    // if (res2.data.code === 1) {
    //   console.log(res2.data.data,'---')
    //   this.setState({
    //     classRoom: res2.data.data,
    //   });
    // } else {
    //   alert("请求失败" + res.data.msg);
    // }
    //获取所有课程请求
    // let res3 = await _getClassName();

    // console.log(res3, "----res3");
    // if (res3.data.code === 1) {
    //   this.setState(
    //     {
    //       classRoom: res3.data.data,
    //     }
    //   );
    // } else {
    //   alert("请求失败" + res.data.msg);
    // }
  }
  onChange() {

  }
  onFocus() {

  }
  onBlur() {

  }
  render() {
    let { classList, columns, classRoom, visible, className } = this.state;
    console.log(classRoom, "---");
    return (
      <div className="classmanager">
        <h2>班级管理</h2>
        <div className="content">
          <div className="top">
            <Button
              type="primary"
              onClick={this.showModal}
              className="addClassBtn"
            >
              添加班级
            </Button>
          </div>
          <div className="list">
            <Table columns={columns} dataSource={classList} />,
          </div>
          <Modal
            title="添加班级"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            className="add_modal"
          >
             <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={this.onChange}
    onFocus={this.onFocus}
    onBlur={this.onBlur}
    // onSearch={onSearch}
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
    {
      classList.map(item=>{
        return <Option value={item["grade_name"]} key={item['grade_id']}>{item["grade_name"]}</Option>
      }) 
    }
    {/* <Option value="jack">Jack</Option> */}
    {/* <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option> */}
  </Select>,
             {/* <Input.Group size="large">
      <Row gutter={8}>
        <Col span={5}>
          <Input defaultValue="" />
        </Col>
        
      </Row>
    </Input.Group>
            <Input.Group >
              <Select style={{ width: "95%" }}>
                {classRoom.map(item => {
                  //item['grade_id']
                  return (
                    <Option
                      key={item["grade_id"]}
                      value=''//{item["grade_name"]}
                     
                    >
                      {item["grade_name"]}
                    </Option>
                  );
                })}
              </Select>
            </Input.Group>

            <Input.Group compact>
              <Select style={{ width: "95%",top:'10px' }} >
                {
              classRoom.map((item:any,index:number)=>{
                  return <Option
                  key={item["grade_id"]}
                  value='1'//{item["subject_text"]}
                  // style={{ top: "10" }}             
                >
                  {item["subject_text"]}
                </Option>
              })
          }
                {/* <Option value="1" children={[]} style={{margin: '10px'}}></Option> */}
              {/* </Select>
            </Input.Group> */} 
          </Modal>
          ;
        </div>
      </div>
    );
  }
}
export default Class;
 // 