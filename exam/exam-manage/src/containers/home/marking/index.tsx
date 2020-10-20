/*
 * @Author: 李壮壮 
 * @Date: 2020-10-19 17:53:22 
 * @Last Modified by: 李壮壮
 * @Last Modified time: 2020-10-19 21:42:31
 */
import React, { Component } from 'react'
// import Modal from '@/components/Modal/Modal'
// import {} from 'antd'
import Tab from './components/indexTab'
export default class index extends Component {

  
    render() {
        return (
            <div >
               <Tab {...this.props}/>
            </div>
        )
    }
    
}
