import React, { Component } from "react";
import { Form, Input, Button, Select, Modal } from "antd";
import { FormInstance } from "antd/lib/form";


const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class ClassModal extends Component<any,any> {
  formRef=React.createRef<FormInstance>()
  constructor(props: any) {
    super(props);
  }

  render() {
    let { visible, _className, classRoom, handleOk, handleCancel, onFinish} = this.props;
    return (
      <Modal
        title='添加班级'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="add_modal"
        footer={null}
      >
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="grade_name"
            label="班级名"
            rules={[{ required: true }]}
          >
            <Input placeholder="班级名" />
          </Form.Item>
          <Form.Item
            name="room_id"
            label="课程名"
            rules={[{ required: true }]}
          >
            <Select placeholder="课程名">
              {classRoom.map((item:any) => {
                return (
                  <Option value={item["room_text"]} key={item["room_id"]}>
                    {item["room_text"]}
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
            <Select placeholder="教室号" >
              {_className.map((item:any) => {
                return (
                  <Option value={item["subject_id"]} key={item["subject_id"]}>
                    {item["subject_text"]}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={handleCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit" className="submit"  onClick={()=>onFinish(this)}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}