/*
 * @Author: 李壮壮 
 * @Date: 2020-10-19 17:53:22 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-21 10:05:13
 */
import React, { Component } from 'react'
import Tab from './components/indexTab'
export default class index extends Component {
    render(){
        return (
            <div className='markIndex'>
                <h2>待批班级</h2>
               <Tab {...this.props}  />
            </div>
        )
    } 
}
