import React, { Component } from "react";
import { Button, Table, message } from "antd";
import { FormInstance } from "antd/lib/form";
import {
  _getClassList,
  _delClassItem,
  _getClassName,
  _addClass,
  _getClassRoom,
} from "@/api/grade";
import ClassModal from "./components/ClassModal";
import EditModal from "./components/EditMpdel";
class Class extends Component {
  formRef = React.createRef<FormInstance>();
  state = {
    flag: false,
    classRoom: [], //所有教室列表
    _className: [], //所有课程列表
    classList: [], //所有班级列表
    visible: false,
    editItem: {},
    
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
              <a className="edit" onClick={() => this.edit(item)}>
                修改
              </a>
              |<a onClick={() => this.delClassItem(item.grade_id)}>删除</a>
            </div>
          );
        },
      },
    ],
  };
  edit(obj: any) {
    this.setState({
      editItem: obj,
      flag: true,
    });
  }
  async delClassItem(id: string) {
    //删除班级
    let res = await _delClassItem({ grade_id: id });
    console.log(res);
  }
  addClass = () => {
    this.setState({
      visible: true,
      editItem: {},
    });
  };
  showModal = (item?: any) => {
    //显示添加编辑对话框
    this.setState({
      visible: true,
      editItem: item,
    });
  };
  handleOk = () => {
    //确定对话框
    this.setState({
      visible: false,
      flag: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
      flag:false
    });
    this.onReset();
  };
  info(value: string) {
    message.info(value);
  }
  onReset = () => {
    this.formRef.current?.resetFields();
  };
  onFinish = async (value: any) => {
    //添加
    //添加班级提交事件
    if (value["subject_id"]) {
      let res = await _addClass(value);
      if (res.data.code === 1) {
        this.setState({
          visible: false,
        });
        this.info("添加成功");
      } else {
        this.info(res.data.msg);
      }
      this.onReset();
    }
  };
  editOk(obj: any) {
    //完成编辑
    console.log(obj, "editOk");
  }
  async componentDidMount() {
    //获取所有班级请求
    let res = await _getClassList();
    if (res.data.code === 1) {
      this.setState({
        classList: res.data.data,
      });
    } else {
      this.info(res.data.msg);
    }
    //获取所有教室请求
    let res3 = await _getClassRoom();
    if (res3.data.code === 1) {
      this.setState({
        classRoom: res3.data.data,
      });
    }
    let res2 = await _getClassName();
    if (res2.data.code === 1) {
      this.setState({
        _className: res2.data.data,
      });
    } else {
      this.info(res.data.msg);
    }
  }
  render() {
    let {
      classList,
      columns,
      classRoom,
      visible,
      _className,
      editItem,
      flag,
    } = this.state;
    return (
      <div className="classmanager">
        <h2>班级管理</h2>
        <div className="content">
          <div className="top">
            <Button
              type="primary"
              onClick={this.addClass}
              className="addClassBtn"
            >
              添加班级
            </Button>
          </div>
          <div className="list">
            <Table columns={columns} rowKey="grade_id" dataSource={classList} pagination={false} />
            
          </div>
          {visible && (
            <ClassModal
              _className={_className}
              visible={visible}
              classRoom={classRoom}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              onFinish={this.onFinish}
            />
          )}
          {flag && (
            <EditModal
              flag={flag}
              editItem={editItem}
              classRoom={classRoom}
              _className={_className}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
              editOk={this.editOk}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Class;