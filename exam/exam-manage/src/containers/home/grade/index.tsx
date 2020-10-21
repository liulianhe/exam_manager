import React, { Component } from "react";
import { Button, Table, message } from "antd";
import { FormInstance } from "antd/lib/form";
import {
  _getClassList,
  _delClassItem,
  _getClassName,
  _addClass,
} from "@/api/grade";
import ClassModal from './components/ClassModal';

class Class extends Component {
  formRef = React.createRef<FormInstance>();
  state = {
    classRoom: [], //所有教室列表
    _className: [], //所有课程列表
    classList: [], //所有班级列表
    visible: false,
    editItem:{},
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
              <a className="edit" onClick={() => this.showModal(item)}>
                修改
              </a>
              |<a onClick={() => this.delClassItem(item.grade_id)}>删除</a>
            </div>
          );
        },
      },
    ],
  };

  async delClassItem(id: string) {//删除班级 
    let res = await _delClassItem({ grade_id: id });
    console.log(res)
  }
  addClass=() => {
    this.setState({
      visible: true,
      editItem:{}
    })
  }
  showModal = (item?:any) => { //显示添加编辑对话框
    console.log(item)
    this.setState({
      visible: true,
      editItem:item
    })
  };
  handleOk = () => { //确定对话框
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
    this.onReset();
  };
  info(value: string) {
    message.info(value);
  }
  onReset = () => {
    this.formRef.current?.resetFields();
  };
  onFinish = async (value: any) => { //添加班级提交事件
    console.log(1)
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
  };

  async componentDidMount() {
    //获取所有班级请求
    let res = await _getClassList();
    if (res.data.code === 1) {
      this.setState({
        classRoom: res.data.data,
        classList: res.data.data,
      });
    } else {
      this.info(res.data.msg);
    }
    //获取所有教室请求
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
    let { classList, columns, classRoom, visible, _className, editItem } = this.state;
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
            <Table columns={columns} rowKey='grade_id' dataSource={classList} />,
          </div>
        {
          visible &&  <ClassModal
            _className={_className}
            visible={visible}
            classRoom={classRoom}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            onFinish={this.onFinish}
            editItem={editItem}
          />
        }
          
        </div>
      </div>
    );
  }
}
export default Class;

/**
 * 
 * <Modal
            title="添加班级"d
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            className="add_modal"
            footer={null} 
          >
            <Form
              {...layout}
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
              layout="vertical"
            >
              <Form.Item name="grade_name" label="班级名" rules={[{ required: true }]}>
                <Input placeholder="班级名"/>
              </Form.Item>

              <Form.Item
                name="room_id"
                label="教室号"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="请选择教室号"
                  allowClear
                >
                  {classRoom.map((item) => {
                    return (
                      <Option value={item["grade_id"]} key={item["grade_id"]}>
                        {item["grade_name"]}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item
                name="subject_id"
                label="课程名"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="课程名"
                  allowClear
                >
                  {className.map((item) => {
                    return (
                      <Option value={item["subject_id"]} key={item["subject_id"]}>
                        {item["subject_text"]}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button htmlType="button" onClick={this.handleCancel}>
                  取消
                </Button>
                <Button type="primary" htmlType="submit" className="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Modal>
 */