import React, { Component, Suspense } from 'react'
import RouterView from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Loading from '@/components/Loading'
class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <ConfigProvider locale={zhCN}>
            <RouterView />
          </ConfigProvider>
        </Suspense>
      </>
    )
  }
}
export default App