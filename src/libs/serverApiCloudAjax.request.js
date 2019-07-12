import serverApiAjax from '@/libs/serverApiCloudAjax'
import {getLocalStorage} from '@/libs/util'
const getServerPath = () =>{
  debugger
  let userInfo = getLocalStorage('userInfo')
  if(userInfo!=""){
  let user =JSON.parse(userInfo)
  return user.serverPath
 }else{
   return ''
 }
}

import config from '@/config'
let baseUrl = process.env.NODE_ENV === 'development' ? config.serverPath.dev : config.serverPath.pro
//console.warn('serverApiCloudAjax baseUrl'+ baseUrl)
if(process.env.NODE_ENV != 'development'){
    baseUrl = getServerPath()+"/api"
}
let baseUrlOption = {
    baseUrl
} 
const axios = new serverApiAjax(baseUrlOption)
export default axios
