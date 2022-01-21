import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
// 先导入 antd 样式文件
import 'antd/dist/antd.min.css'
// 再导入全局样式文件，防止样式覆盖！
import './index.scss'
import store from '@/store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
