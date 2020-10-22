import React, { Component } from 'react';
import echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
const colorList: string[] = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']

class Tb extends Component<any, any> {
    state = {
        option: {}
    }
    setData() {
        this.setState({
            option: {
                backgroundColor: '#fff',
                title: {
                    text: '周考成材率',
                    textStyle: {
                        fontSize: 22,
                        fontWeight: 800
                    },
                    left: 'center',
                    top: '5%'
                },
                legend: {
                    icon: 'circle',
                    top: '5%',
                    right: '5%',
                    itemWidth: 6,
                    itemGap: 20,
                    textStyle: {
                        color: '#556677'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        label: {
                            show: true,
                            backgroundColor: '#fff',
                            color: '#556677',
                            borderColor: 'rgba(0,0,0,0)',
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowOffsetY: 0
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    backgroundColor: '#fff',
                    textStyle: {
                        color: '#5c6c7c'
                    },
                    padding: [10, 10],
                    extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
                },
                grid: {
                    top: '15%'
                },
                xAxis: [{
                    name: '班级',
                    type: 'category',
                    data: this.props.subList,
                    axisLine: {
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#556677'
                        },
                        // 默认x轴字体大小
                        fontSize: 18,
                        // margin:文字到x轴的距离
                        margin: 15
                    },
                    axisPointer: {
                        label: {
                            // padding: [11, 5, 7],
                            padding: [0, 0, 10, 0],
                            margin: 15,
                            // 移入时的字体大小
                            fontSize: 16,
                            backgroundColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#fff' // 0% 处的颜色
                                }, {
                                    // offset: 0.9,
                                    offset: 0.86,
                                    /*
            0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                                    
                                    */
                                    color: '#fff' // 0% 处的颜色
                                }, {
                                    offset: 0.86,
                                    color: '#33c0cd' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#33c0cd' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    },
                    boundaryGap: false
                }],
                yAxis: [{
                    name: '成材率(%)',
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#556677'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    max: 100
                }, {
                    max: 100,
                    type: 'value',
                    position: 'right',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#556677'
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: '周考一',
                    type: 'line',
                    data: this.props.oneList,
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#9effff'
                        },
                        {
                            offset: 1,
                            color: '#9E87FF'
                        }
                        ]),
                        shadowColor: 'rgba(158,135,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[0],
                            borderColor: colorList[0]
                        }
                    }
                }, {
                    name: '周考二',
                    type: 'line',
                    data: this.props.twoList,
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                            offset: 0,
                            color: '#73DD39'
                        },
                        {
                            offset: 1,
                            color: '#73DDFF'
                        }
                        ]),
                        shadowColor: 'rgba(115,221,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[1],
                            borderColor: colorList[1]
                        }
                    }
                },
                {
                    name: '周考三',
                    type: 'line',
                    data: this.props.threeList,
                    symbolSize: 1,
                    yAxisIndex: 1,
                    symbol: 'circle',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#fe9a'
                        },
                        {
                            offset: 1,
                            color: '#fe9a8b'
                        }
                        ]),
                        shadowColor: 'rgba(254,154,139, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[2],
                            borderColor: colorList[2]
                        }
                    }
                }
                ]
            }
        }, () => {
            var myChart = echarts.init(this.tb as HTMLDivElement);
            myChart.setOption((this.state as any).option);
        })
    }
    tb: HTMLDivElement | null = null
    componentDidMount() {
        this.setData()
    }
    componentWillReceiveProps() {
        this.setData()
    }
    render() {
        console.log(this.props);
        return (
            <div
                ref={(e) => this.tb = e} style={{
                    width: '70%',
                    height: 600,
                    marginLeft: 50,
                    marginTop: 50
                }} className='tab'>
            </div>
        );
    }
}

export default Tb;