/**
 * Created by ligang on 2018/4/10.
 */

import axios from 'axios'

export default {
  // 插件应当有一个公开方法 install
  install (Vue, options = {}) {
    let {isReqInterceptor = false, isResInterceptor = false} = options
    // 发送请求前拦截
    isReqInterceptor && axios.interceptors.request.use(req => {
      req.headers.Authorization = 'token'
      return req;
    }, error => {
      return Promise.reject(error);
    });
    // 成功响应后拦截
    isResInterceptor && axios.interceptors.response.use(res => {
      return res;
    }, error => {
      return Promise.reject(error);
    });

    // 请求主体
    Vue.prototype.$request = function (reqData, reqOptions = {}) {
      let {method = 'get', url = '', data = {}} = reqData
      let {timeout = 60000} = reqOptions
      return new Promise((resolve, reject) => {
        axios({
          method,
          url,
          data,
          timeout
        }).then(res => {
          let {status, content} = res.data
          if (status === 'success') {
            resolve(content)
          }
        }, err => {
          if (err.code === 'ECONNABORTED') {
            console.error('请求超时！')
          }else {
            switch (err.response && err.response.status) {
              case 401:
              case 403:
                console.error('权限问题！')
                break
              default:
                console.error(err)
            }
          }
          reject(`请求发送了错误：${err.message}`)
        })
      })
    }
  }
}