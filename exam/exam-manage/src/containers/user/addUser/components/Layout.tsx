import React, { Component } from 'react';
import { Layout } from 'antd'
interface IProps {

}
class myLayout extends Component<IProps> {
    render() {
        const { Content } = Layout
        return (
            <>
                <Layout>
                    <Layout>
                        <Content>1</Content>
                        <Content>2</Content>
                        <Content>3</Content>
                    </Layout>
                    <Layout>
                        <Content>1</Content>
                        <Content>2</Content>
                        <Content>3</Content>
                    </Layout>
                </Layout>
            </>
        );
    }
}

export default myLayout;