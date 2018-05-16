/**
 * Created by ligang on 2018/4/10.
 */

import axios from 'axios'

export default {
  // 插件应当有一个公开方法 install
  install (Vue, options = {}) {
    let {isReqInterceptor = false, isResInterceptor = false} = options

    const CancelToken = axios.CancelToken;
    // cancel集合，避免互相冲突 <method:url>做主键，适配Restful方式
    let cancelCollection = new Map()

    /**
     * 发送请求前拦截
     */
    isReqInterceptor && axios.interceptors.request.use(req => {
      req.headers.Authorization = window.localStorage.Authorization
      return req;
    }, error => {
      return Promise.reject(error);
    });

    /**
     * 成功响应后拦截
     */
    isResInterceptor && axios.interceptors.response.use(res => {
      return res;
    }, error => {
      return Promise.reject(error);
    });

    /**
     * 发送请求
     * @param reqData 请求主体
     * @param reqOptions 请求参数配置
     * @returns {Promise}
     */
    Vue.prototype.$request = function (reqData, reqOptions = {}) {
      let {method = 'get', url = '', data = {}} = reqData
      let {timeout = 60000, isCancel = false} = reqOptions
      return new Promise((resolve, reject) => {
        let axiosOptions = {
          method,
          url,
          data,
          timeout
        }
        if (isCancel) {
          axiosOptions.cancelToken = new CancelToken(function executor(c) {
            cancelCollection.set(`${method.toUpperCase()}:${url.toLowerCase()}`, c);
          })
        }
        axios(axiosOptions).then(res => {
          let {status, content} = res.data
          if (status === 'success') {
            resolve(content)
          }
        }, err => {
          if (err.code === 'ECONNABORTED') {
            console.error('请求超时！')
          } else if (axios.isCancel(err)) {
            console.error('请求被取消！')
          } else {
            switch (err.response && err.response.status) {
              case 401:
              case 403:
                console.error('权限问题！')
                break
              default:
                console.error(err)
            }
          }
          reject(`请求发送了错误：${err}`)
        })
      })
    }

    /**
     * 获取取消请求token
     */
    Vue.prototype.$requestSource = function (url, method = 'get') {
      let key = `${method.toUpperCase()}:${url.toLowerCase()}`
      cancelCollection.get(key)()
      cancelCollection.delete(key)
    }
  }
}