import React, { Component } from 'react'
import { Row, Col, Table, Popconfirm, Button, Modal, Form, Input, message, } from 'antd';
import { PlusOutlined} from '@ant-design/icons';
import { _getClassRoomList, } from '../../../api/student';
import { _addClassList, _delClassList } from '../../../api/class';
interface IProps {

}
interface IState {
  classRoomes: any[],
  columns: any[],
  visible: boolean,
  loading: boolean,
  classRoomname: string,
}


export default class Classroom extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      classRoomes: [],
      visible: false,
      loading: false,
      classRoomname: '',
      columns: [
        {
          title: '教室号',
          dataIndex: 'room_text',
          key: 'room_text',
        },
        {
          title: '操作',
          dataIndex: 'age',
          render: (text: any, record: any) =>
            this.state.classRoomes.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
                <a>删除</a>
              </Popconfirm>
            ) : null,
        }
      ]
    }
  }
  componentDidMount() {
    this.getClassRoomList();
  }
  // 打开对话框
  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    if (!this.state.classRoomname) {
      message.error('教室号不能为空')
      return
    }
    if (!/^[123456789]\d{4}$/.test(this.state.classRoomname)) {
      message.error('教室号格式不对')
      return
    }
    this.addClass();
    this.setState({ visible: false, classRoomname:'' });
    this.getClassRoomList();
  };

  // 添加教室
  addClass = async () => {
    let results = await _addClassList({ room_text: this.state.classRoomname });
    if (results.data.code === 1) {
      this.getClassRoomList();
      message.success(results.data.msg)

    }
  }

 
  handleCancel = () => {
    this.setState({ visible: false });
  };

  // 删除
  handleDelete = (value: any) => {
    this.del(value.room_id)
  };

 // 删除教室
 del =async (id:string) => {
  let results = await _delClassList({room_id:id});
  console.log(results)
  this.getClassRoomList();
}

  // 获取教室号
  getClassRoomList = async () => {
    let results = await _getClassRoomList();
    let index = 1;
    if (results.data.code === 1) {
      let list = results.data.data.map((item: any) => {
        return { ...item, key: index++ }
      })
      this.setState({
        classRoomes: list
      })
    }
    console.log(this.state.classRoomes)
  }
  changeTxt = (e: any) => {
    this.setState({
      classRoomname: e.target.value
    })
    console.log(this.state.classRoomname)
  }

  render() {
    const { columns, classRoomes, classRoomname, visible } = this.state
    return (
      <div className="classromm">
        <Row>
          <Col span={24}><h2>教室管理</h2></Col>
        </Row>
        <div className="addbox">
        <Row>
          <Col className="add" span={24}><Button type="primary" onClick={() => this.showModal()}><PlusOutlined />添加教室</Button></Col>
        </Row>
          <Table dataSource={classRoomes} columns={columns} />
        </div>

        <Modal
          visible={visible}
          title="添加教室"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Form.Item
              label="教室号"
              rules={[{ required: true, message: '教室号' }]}
            >
              <Input value={classRoomname} onChange={(e) => this.changeTxt(e)} />
            </Form.Item>
          </div>
        </Modal>
      </div>
    )
  }
}