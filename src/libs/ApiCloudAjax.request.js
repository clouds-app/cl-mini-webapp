import ApiAjax from '@/libs/ApiCloudAjax '
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

let baseUrlOption ={
    baseUrl: baseUrl
}

const axios = new ApiAjax(baseUrlOption)
export default axios


// // 是否有设置网络错误监听器
// let isNetListener = false;
// // 存放网络错误ajax请求
// let netAjaxArr = [];
// // 存放网络错误ajax结果处理函数
// let netResArr = [];
// let ajax = new ApiAjax({
//   interceptorResErr: (err,  res, rej) => {
//     let { data, config } = err;
//     // 拦截网络错误响应
//     if (data.statusCode === 0) {
//       // 广播网络错误
//       api.sendEvent({name: 'netError'})
//       // ajax请求数组与ajax结果处理函数数组必须一一对应
//       // 这里请求数组与结果处理函数数组用队列模型处理
//       netAjaxArr.push(config);
//       netResArr.push(res);
//       // 开启对应的监听器
//       // 监听器要对所有ajax请求数组中的请求遍历访问，并把结果交由对应的结果处理函数处理
//       // 并把相应的请求从数组中清除
//       if (!isNetListener) {
//         api.addEventListener({ name: 'network' }, () => {
//           let arrLength = netAjaxArr.length;
//           for (let i = 0; i < arrLength; i++) {
//             // 用闭包函数或者let处理异步问题
//             let handle = netResArr.shift();
//             ajax.ajax(netAjaxArr.shift()).then(ret => {
//               handle(ret);
//               // 关闭网络错误页
//               api.closeWin({ name: 'network_error' });
//             });
//           }
//         })
//         // 把网络监听器的标志设为打开状态
//         isNetListener = true;
//       }
//       // 打开网络错误页
//       // 这里需要通过延时解决 openWin() 失效bug
//       setTimeout(() => api.openWin({
//         name: 'network_error',
//         url: 'network_error.html',
//         slidBackEnabled: 'false',
//         bgColor: '#fff',
//         animation: {
//           type: 'none'
//         }
//       }), 500);
//     } else {
//       rej({
//         ...data,
//         url: config.url
//       });
//     }
//   }
// });