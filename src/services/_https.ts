import axios, { AxiosResponse } from 'axios'

const _devBURL = 'http://localhost:3000'
const _proBURL = 'http://192.168.0.243:3000'
const BASE_URL = process.env.NODE_ENV !== 'development' ? _proBURL : _devBURL;

// 全局配置
axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

const http = {
  get: function (path='', data={}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios.get(path, { parmas: data })
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  },
  post: function (path='', data={}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  },
  delete: function (path='', data={}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios.delete(path, { data })
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  },
  put: function (path='', data={}): Promise<AxiosResponse<any>> {
    return new Promise(function (resolve, reject) {
      axios.put(path, data )
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  }
}

export default http
