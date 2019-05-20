
// 本段代码为Apicloud Ajax类核心方法ajax的封装,
// 后续的一些粒子方法如get/post/put/delete等,
// 都是通过修改ajax方法传入的参数进行封装,
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// 默认配置对象
var options = {
    // 基础url前缀
    baseUrl: baseUrl,
    // 默认错误处理函数
    defErrHandle: err => {throw new Error(JSON.stringify(err))},
    // 默认成功处理函数
    defSueHandle: () => {},
    // 响应成功拦截器
    interceptorResSuc: (res, fn) => {
      console.warn('响应成功拦截器:'+JSON.stringify(res))
      return fn(res.data)
    },
    // 响应失败拦截器
    // 默认把错误信息和出错接口向上抛出
    interceptorResErr: (err,  res, rej) => {
      console.warn('响应失败拦截器:'+JSON.stringify(err))
      let { data, config } = err;
      if (data.statusCode === 0) {
        // 广播网络错误
        api.sendEvent({name: 'netError'})
      }
      return rej({...err.data, url: err.config.url})
    },
    // 请求拦截器
    interceptorReq: (config) => {
      console.warn('请求拦截器:'+JSON.stringify(config))
      return config
    }
  }
  
  class ApiAjax {
    /**
     * 构造方法
     * @param  {object} config 配置参数
     */
    constructor (config) {
      options = Object.assign(options, config);
    }
    /**
     * 配置 其它参数
     * @param  {object} config 配置参数
     */
    getInsideConfig () {
      const config = {
        headers: {
         'token':'123'
        }
      }
      return config
    }
    /**
     * 封装了apicloud中的ajax方法
     * @param  {object} arg apicloud ajax控制对象
     * @return {Promise}     Promise对象
     */
    request (arg) {
      let _arg = Object.assign(this.getInsideConfig(), arg);
      arg.url = options.baseUrl + arg.url;
      // _Promise为Promise一个封装对象
      return new Promise((res, rej) => {
        // 调用请求拦截器
        let config = options.interceptorReq(arg);
        // 调用apicloud中的ajax方法
        !!config && api.ajax(config, (ret, err) => {

          // 将结果传入对应的拦截器中,并把最后的成功/失败判定权转移到连接器中
          if (!!ret) {
           // console.warn('---------options.interceptorResSuc -----')
            options.interceptorResSuc({data: ret, config: _arg}, res, rej);
          }
          else {
           // console.warn('---------options.interceptorResErr -----')
            options.interceptorResErr({data: err, config: _arg}, res, rej);
          }
        })
      })
    }
  }
 
  export default ApiAjax