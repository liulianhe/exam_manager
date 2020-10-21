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
                <h3 style={{width:'100%',height:'60px',lineHeight:'60px',textIndent:'30px'}}>待批班级</h3>
               <Tab {...this.props}  />
            </div>
        )
    } 
}
