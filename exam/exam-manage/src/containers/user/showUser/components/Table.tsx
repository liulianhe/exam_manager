import React, { Component } from 'react';
import { Table } from 'antd';

interface IProps {
    data: any,
    columns: any,
}
interface IState {

}
class myTable extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Table columns={this.props.columns}
                pagination={{
                    total: this.props.data.length,
                    pageSize: 10,
                }}
                //@ts-ignore
                rowKey='id'
                dataSource={this.props.data} />
        );
    }
}

export default myTable;