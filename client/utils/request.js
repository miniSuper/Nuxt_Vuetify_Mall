import axios from 'axios'
import Qs from 'qs'
import { Message } from 'element-ui'
// console.log('path-name', `../env/env.${process.env.mode}.js`)
// const ENV_CONFIG = require(`../env/env.${process.env.mode}.js`)
// console.log('{process.env.mode', process.env.mode)
// console.log('{ENV_CONFIG', ENV_CONFIG)
console.log('process.env.API_URL', process.env.API_URL)
// 创建axios实例
const service = axios.create({
  baseURL: process.env.API_URL, // api 的 base_url
  timeout: 30000, // request timeout
  transformRequest: [
    function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }
  ],
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.result) {
      return response
    }
    if (res.code !== 0) {
      // 非5xx的错误属于业务错误，留给具体页面处理
      return Promise.reject(response)
    } else {
      return response
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    Message({
      message: '登录连接超时（后台不能连接，请联系系统管理员）',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
