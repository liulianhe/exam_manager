import React, { Component } from 'react';
import { Button, Table, Space, Modal, Input, message, Popconfirm } from 'antd';
import { _getQuestionsList, _insertQuestionsType, _delQuestionsType } from '../../../api/questions'

interface addUpdate {
    exam_id?: string,
    exam_name?: string,
    json_path?: string,
    questions_answer?: string,
    questions_id?: string,
    questions_stem?: string,
    questions_type_id?: string,
    questions_type_text?: string,
    subject_id?: string,
    subject_text?: string,
    title?: string,
    user_id?: string,
    user_name?: string,
    key?:string
}
class ClassQuestions extends Component {
    state = {
        columns: [
            {
                title: '类型ID',
                dataIndex: 'questions_type_id',
                width: 450,
            },
            {
                title: '类型名称',
                dataIndex: 'questions_type_text',
                width: 450,
            },
            {
                title: '操作',
                dataIndex: 'address',
                render: (text: any, record: addUpdate) => (
                    <Space size="middle">
                        <Popconfirm placement="top" title="确认要删除？" onConfirm={() => { this.confirm(record) }} okText="Yes" cancelText="No">
                            <Button danger >删除</Button>
                        </Popconfirm>
                    </Space>
                ),
            },
        ],
        QuestionsList: [],
        visible: false,
        newExamType: null,
        questions_type_id: null
    }
    render() {
        return (
            <div className="questionsType">
                <h2>试题分类</h2>
                <div className="questionsType_main">
                    <Button type="primary" onClick={() => { this.showModal() }} className='add_type'> + 添加类型</Button>
                    <Modal
                        title="创建新类型"
                        visible={this.state.visible}
                        onOk={() => { this.handleOk() }}
                        onCancel={() => { this.handleCancel() }}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Input placeholder="input with clear icon" allowClear onChange={(e) => { this.onChange(e) }} />
                    </Modal>
                    <Table columns={this.state.columns} dataSource={this.state.QuestionsList} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getList()
    }
    //获取 课程分类列表  考试分类列表  题目类型列表
    async getList() {
        let res_Questions = await _getQuestionsList()
        console.log(res_Questions.data.data)
        let arr: any[] = []
        res_Questions.data.data.map((item: addUpdate) => {
            item.key = item.questions_type_id
            arr.push(item)
        })
        this.setState({
            QuestionsList: arr,
        })
    }

    //添加新类型-对话框显示
    showModal() {
        this.setState({
            visible: true,
        });
    };

    //确认添加新类型
    async handleOk() {
        this.setState({
            visible: false,
        });
        if (this.state.newExamType) {
            let res = await _insertQuestionsType({
                text: this.state.newExamType as unknown as string,
                sort: this.state.QuestionsList.length + 1
            })
            if (res.data.code) {
                message.info("添加成功");
                this.getList()
            }
        }
    };

    //取消添加新类型
    handleCancel() {
        this.setState({
            visible: false,
        });
    };

    //输入框值变化时
    onChange(e?: any) {
        this.setState({
            newExamType: e.target.value
        })
    };


    // 确认删除
    async confirm(record: any) {
        let res = await _delQuestionsType({ id: record.questions_type_id })
        if (res.data.code) {
            message.info(res.data.msg);
            this.getList()
        }
    }
}

export default ClassQuestions;