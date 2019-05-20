// import axios from '@/libs/api.request'
// import Qs from 'qs'

// /**
// * @description 用户登录
// * @params { username, password }
// */
// export const login = ({ username, password }) => {
//     //参数
//     const data = {
//       username,
//       password
//     }
//     return axios.request({
//       url: '/api/user/login',
//       data,
//       method: 'post',
//       transformRequest: [function (data) {
//         // 对 data 进行任意转换处理
//         return Qs.stringify(data)
//       }],
//     })
//   }

// /**
// * @description 用户退出--
// */
// export const logout = () => {
//     //参数
//     const data = {
//    }
//    return axios.request({
//      url: '/api/user/loginOut',
//      data,
//      method: 'post',
//      transformRequest: [function (data) {
//        // 对 data 进行任意转换处理
//        return Qs.stringify(data)
//      }],
//    })
//  }
  


//  /**
// * @description 获取用户信息--暂时无此接口
// */
// export const getUserInfo = (token) => {
//     return axios.request({
//       url: 'get_info',
//       params: {
//         token
//       },
//       method: 'get'
//     })
//   }