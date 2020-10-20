import React, { Component } from 'react';
import { Table } from 'antd';

interface IProps {
    data: any,
    columns: any,
}

class myTable extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
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