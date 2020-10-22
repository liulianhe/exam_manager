import React from 'react';
import ReactDOM from 'react-dom';
import stores from './store/index'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import 'antd/dist/antd.css'
<<<<<<< HEAD

import './index.scss'


=======
import './index.scss'
import { CookiesProvider } from 'react-cookie'
>>>>>>> a343a85633839633e928f4fcff965bdb065b7f00
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

