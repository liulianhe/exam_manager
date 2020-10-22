import React, { Component } from 'react';
import Tb from '@/containers/template/components/Tb'
import Zx from '@/containers/template/components/Zx'
import { Select, Button, message } from 'antd'
const subject: string[] = ['1701B', '1610A', '1611A', '1611B', '1611C', '1609B', '1609A', '1610B', '1701C', '1612A', '1612B', '1701E']
const rod = function (): number {
    let num: number = Math.random() * 50 + 50
    return parseInt(`${num}`)
}
class MexamPred extends Component {
    state = {
        subList: ['1701B', '1610A', '1611A', '1611B', '1611C'],
        oneList: [rod(), rod(), rod(), rod(), rod()],
        twoList: [rod(), rod(), rod(), rod(), rod()],
        threeList: [rod(), rod(), rod(), rod(), rod()],
        select: '',
        pred: [],
        flag: false
    }
    addSubList() {
        if (this.state.select === '') return message.error('请先选择班级')
        if (this.state.subList.indexOf(this.state.select) === -1) {
            message.success('班级添加成功', 1, () => {
                this.state.subList.push(this.state.select)
                this.state.oneList.push(rod())
                this.state.twoList.push(rod())
                this.state.threeList.push(rod())
                this.setState({
                    subList: this.state.subList,
                    oneList: this.state.oneList,
                    twoList: this.state.twoList,
                    threeList: this.state.threeList,
                })
            })
        } else {
            message.warning('班级已经存在')
        }
    }
    yz() {
        let arr: number[] = []
        const { subList, oneList, twoList, threeList } = this.state
        subList.forEach((item: string, index: number) => {
            let n = oneList[index] + twoList[index] + (threeList[index] * 2)
            arr.push(n / 4)
        })
        this.setState({
            pred: arr
        }, () => {
            this.setState({
                flag: true,
            }, () => {
                console.log(this.state.flag);
            })
        })
    }
    render() {
        console.log(this.state);
        return (
            <div style={{ width: '100%' }}>
                <div style={{
                    display: 'flex',
                    width: '100%',
                }}>
                    <Tb  {...this.state} />
                    <h3
                        style={{
                            margin: 50,
                            height: 50
                        }}
                    >
                        <Button type='primary' onClick={() => { this.yz() }}>月考预测</Button>
                        <br />
                        <div>
                            {
                                this.state.flag ? <Zx subList={this.state.subList} pred={this.state.pred} /> : ''
                            }
                        </div>
                    </h3>



                </div>
                <div>
                    <Select style={{ width: 200, margin: '10px 45px' }}
                        onChange={(e: any) => { this.setState({ select: e }) }}
                        placeholder='请选择想要添加的班级'>
                        {
                            subject.map((item: string, index: number) => {
                                return <Select.Option key={index + item} value={item}>
                                    {item}
                                </Select.Option>
                            })
                        }
                    </Select>
                    <Button type='primary'
                        onClick={() => { this.addSubList() }}
                        style={{ marginLeft: 20 }}> 添加班级</Button>
                </div>
            </div>
        );
    }
}

export default MexamPred;