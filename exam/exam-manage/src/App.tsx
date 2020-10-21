import React, { Component } from 'react'
import RouterView from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    )
  }
}

export default App
