import vueAxios from '@/libs/api.request'
import config from '@/config'
import ApiCloudAjax from '@/libs/ApiCloudAjax.request'
import Qs from 'qs'

 var axios = config.isRunApp ? ApiCloudAjax : vueAxios
const apiPath=config.isRunApp ?'/clerp-app-api':'/api'
/**
* @description 获取随机码，用于MD5 加密
* @params { userId }
*/
export const getValidatorToken = ({ userId }) => {
  //参数
  let data = {
    userId
   }
   
  if(config.isRunApp){
    //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
    data= {values: data} 
  } 
  return axios.request({
    url: `${apiPath}/user/validatorToken`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
      return Qs.stringify(data) 

    }],
  })
}

/**
* @description 用户登录
* @params { userId, password }
*/
export const login = ({ userId, pwd },callback) => {
    //参数
    let data = {
      userId,
      pwd
     }
     
    if(config.isRunApp){
      //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
      data= {values: data} 
    } 
    return axios.request({
      url: `${apiPath}/user/login`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
        return Qs.stringify(data) 

      }],
    })
  }


/**
* @description 根据token,获取用户功能菜单
* @params { token } 
*/
export const getMenuByToken = ({ token }) => {
  //参数
  let data = {
    token
   }
   
  if(config.isRunApp){
    //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
    data= {values: data} 
  } 
  return axios.request({
    url: `${apiPath}/user/resourceInfo`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
      return Qs.stringify(data) 

    }],
  })
}