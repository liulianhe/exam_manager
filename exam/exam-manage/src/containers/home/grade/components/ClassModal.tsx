import React, { Component } from "react";
import { Form, Input, Button, Select, Modal } from "antd";
import { FormInstance } from "antd/lib/form";
import { exit } from "process";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
// interface CustomizedFormProps {
//     onChange: (fields: FieldData[]) => void;
//     fields: FieldData[];
//   }
//   const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => 
export default class ClassModal extends Component<any,any> {
  formRef=React.createRef<FormInstance>()
  constructor(props: any) {
    super(props);
    this.state = {
        visible:false,
        roomText:props.editItem['grade_name'] || ''
    }
  }
  onChange() {
        
  }
  render() {
    let { visible, _className, classRoom, handleOk, handleCancel, onFinish, editItem } = this.props;
    // console.log(editItem["grade_id"],'---')
    // let defalutValue = editItem["grade_id"] ? editItem :{}
    // let flag =(JSON.stringify(editItem) === "{}") 
    // console.log(flag,'flag')
    // console.log(title,'title')
    // console.log(defalutValue)
    classRoom.push({grade_id:'asdasaaa',grade_name:'1801'})
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
            initialValue={this.state.roomText}
          >
            <Input placeholder="班级名" />
          </Form.Item>

          <Form.Item name="grade_id" label="教室号" >
            <Select placeholder="请选择教室号">
              {classRoom.map((item:any,index:number) => {
                return (
                 <Option value={item['grade_id']} key={item['grade_id']}>
                    {item['grade_name']}
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
            <Select placeholder="课程名">
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
            <Button type="primary" htmlType="submit" className="submit" onClick={handleOk} >
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
