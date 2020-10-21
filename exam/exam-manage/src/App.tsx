import React, { Component, Suspense } from 'react'
import RouterView from './router';
import Loading from '@/components/Loading'
class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <RouterView />
      </Suspense>
    )
  }
}
export default App