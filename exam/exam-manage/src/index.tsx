import React from 'react';
import ReactDOM from 'react-dom';
import stores from './store/index'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import 'antd/dist/antd.css'
// import 'antd/dist/antd.compact.css'

import './index.scss'


ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

