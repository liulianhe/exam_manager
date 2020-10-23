import React, { Component } from "react";
import { Form, Input, Button, Select, Modal, message } from "antd";
import { FormInstance } from "antd/lib/form";
import { _editGrade } from '@/api/grade'


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
    this.state = {
        visible:false,
        roomText:props.editItem['grade_name'] || '',
        classText:props.editItem['room_text'] || '',
        subjectText:props.editItem['subject_text']||''
    }
  }
  edit = async (values:any) => {
    let obj = {grade_id:values["grade_id"],room_id:values["room_id"],subject_id:values["subject_id"]}
    let res = await _editGrade(obj)
    if(res.data.code===1) {

    } else {
      message.info(res.data.msg);
    }
    this.props.handleOk()
  }
  render() {
    let { flag, _className, classRoom, handleOk, handleCancel, onFinish} = this.props;
    return (
      <Modal
        title='编辑'
        visible={flag}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.state.roomText?this.edit:onFinish}
          layout="vertical"
        >
          <Form.Item
            name="grade_id"
            label="班级名"
            rules={[{ required: true }]}
            initialValue={this.state.roomText}
          >
            <Input placeholder="班级名" />
          </Form.Item>
          <Form.Item
            name="room_id"
            label="课程名"
            rules={[{ required: true }]}
            initialValue={this.state.classText}
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
            initialValue={this.state.subjectText}
            
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
            <Button type="primary" htmlType="submit" className="submit"  >{/**onClick={this.state.roomText?()=>this.edit(this.formRef):onFinish} */}
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
// import React, { Component } from "react";
// import { Form, Input, Button, Select, Modal } from "antd";
// import { FormInstance } from "antd/lib/form";
// const { Option } = Select;
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };
// export default class EditModel extends Component<any, any> {
//   formRef = React.createRef<FormInstance>();
//   constructor(props: any) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     let { flag, classRoom, handleOk, handleCancel, onFinish } = this.props;

//     return (
//       <Modal
//         title="编辑"
//         visible={flag}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         className="edit_modal"
//         footer={null}
//       >
//         <Form
//           {...layout}
//           ref={this.formRef}
//           name="control-ref"
//           onFinish={onFinish}
//           layout="vertical"
//         >
//           <Form.Item {...tailLayout}>
//             <Button htmlType="button" onClick={handleCancel}>
//               取消
//             </Button>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="submit"
//               onClick={handleOk}
//             >
//               提交
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     );
//   }
// }
// //** onClick={()=>onFinish(this)} */
