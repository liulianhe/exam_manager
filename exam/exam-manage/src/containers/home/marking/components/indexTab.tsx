/*
 * @Author: lizhuangzhuang 
 * @Date: 2020-10-21 10:32:57 
 * @Last Modified by: HuangChao
 * @Last Modified time: 2020-10-22 10:22:11
 */

import React, { Component } from 'react'
import { Table, Button } from 'antd';
import { _getMarkingClass } from '@/api/mark'
interface IProps {
  history?: any
};
interface IState {
  dataSource: {//表格数据规范
    key: string,
    className?: string,
    course: string,
    state: string,
    className2: string,
    talentRate: string
  }[],
  columns: {//表头数据规范
    title: string,
    dataIndex: string,
    key: string,
    render?: any
  }[]
}
export default class tab extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      dataSource: [],//表格数据
      columns: [//表头数据
        {
          title: '班级名',
          dataIndex: 'className',
          key: 'className',
        },
        {
          title: '课程名',
          dataIndex: 'course',
          key: 'course',
        },
        {
          title: '阅卷状态',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: '课程名称',
          dataIndex: 'course',
          key: 'course',
        },
        {
          title: '教室',
          dataIndex: 'talentRate',
          key: 'talentRate',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text: any, record: any) => (
            <Button size="middle" type='primary' onClick={() => this.mark(text, record)}>批卷</Button>
          )
        }
      ]
    }
  }
  componentDidMount() {
    /**
     * 初始化获取数据
     */
    this.getList()
  }
  mark(text: any, record: { grade_id: any; className: any; }) {
    /**
     * @title 跳转路由到批卷班级学生列表
     * @id 班级id
     * @
     */
    this.props.history.push({
      pathname: '/home/examPaperClassmate',
      state: { id: record.grade_id, name: record.className }
    })

  }

  async getList() {
    /**
     * @param 获取待批班级数据列表
     * 
     */
    const result = await _getMarkingClass();
    if (result.data.code === 1) {
      /**
       * 
       */
      let arr: { key: any; className: any; course: string; state: string; className2: any; talentRate: any, grade_id: string }[] = []

      result.data.data.forEach((item: any, index: number) => {
        arr.push({
          key: item.grade_id + item.grade_name,
          grade_id: item.grade_id,
          className: item.grade_name,
          course: item.subject_text,
          state: '',
          className2: item.grade_name,
          talentRate: item.room_text,
        })
      })
      this.setState({
        dataSource: arr
      })
    }
  }
  render() {
    return (
      <div>
        <Table dataSource={this.state.dataSource} columns={this.state.columns} />
      </div>
    )
  }
}
