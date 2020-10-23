import React, { Component } from 'react';
import echarts from 'echarts'
interface IProps {
    subList: string[]
    pred: number[]
}
class Zx extends Component<IProps, any> {
    state = {
        option: {}
    }
    setData() {
        this.setState({
            option: {
                title: {
                    text: '月考成材率',
                    textStyle: {
                        fontSize: 22,
                        fontWeight: 800
                    },
                    left: 'center'
                },
                xAxis: {
                    name: '班级',
                    type: 'category',
                    data: this.props.subList
                },
                yAxis: [
                    {
                        name: '成材率',
                        type: 'value',
                        max: 100
                    }
                ],
                series: [
                    {
                        name: '月考预测',
                        type: 'bar',
                        radius: '55%',
                        data: this.props.pred
                    }
                ]
            }
        })
        var myChart = echarts.init(this.zx as HTMLDivElement);
        myChart.setOption((this.state as any).option);
    }
    componentDidMount() {
        this.setData()
    }
    componentWillReceiveProps() {
        this.setData()
    }
    zx: HTMLDivElement | null = null
    render() {
        return (
            <div ref={(e) => this.zx = e} style={{ width: 400, height: 400 }}>

            </div>
        );
    }
}

export default Zx;