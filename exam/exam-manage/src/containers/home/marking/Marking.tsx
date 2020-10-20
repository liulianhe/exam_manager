/*
 * @Author: 李壮壮 
 * @Date: 2020-10-19 20:44:57 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-19 21:42:36
 */
import React, { Component } from 'react'
import {Select,Button} from 'antd'
import Tab from './components/marlingTab'
const {Option} = Select
interface IProps{
    location:any
}
export default class Marking extends Component<IProps> {
    render() {
        return (
            <div className='marking'>
               <div className="inquire">
               <label htmlFor="" style={{margin:30,display:'block'}}>
                   状态：
               <Select defaultValue="" className="select-before" style={{width:'150px'}}>
                    <Option value="http://">http://</Option>
                    <Option value="https://">https://</Option>
                </Select>
               </label>
               <label htmlFor="" style={{margin:20,display:'block'}} >
                   班级：
               <Select defaultValue="" className="select-before" style={{width:'150px'}}>
                    <Option value="http://">http://</Option>
                    <Option value="https://">https://</Option>
                </Select>
               
               </label>
               
                <Button type="primary" style={{width:'150px'}}>查询</Button>
                </div>
                <div className="mainList">
                    <Tab {...this.props} />
                </div>
            </div>
        )
    }
}
