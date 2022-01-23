// 封装axios
import axios from 'axios'
import { message } from 'antd'
import { getToken } from './storage'
import store from '@/store'
import { loginOut } from '@/store/actions/login'
import history from './history'

const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    // console.dir(error)
    message.error('登录信息过期', 1)
    // 清除token
    store.dispatch(loginOut())
    // 跳转到登录 history

    history.replace({
      pathname: '/login',
      state: {
        from: history.location.pathname,
      },
    })

    return Promise.reject(error)
  }
)

export default instance
