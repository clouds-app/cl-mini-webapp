import vueAxios from '@/libs/api.request'
import config from '@/config'
import ApiCloudAjax from '@/libs/ApiCloudAjax.request'
import Qs from 'qs'

var axios = config.isRunApp ? ApiCloudAjax : vueAxios
const apiPath=config.isRunApp ?'/clerp-app-api':'/api'

/**
* @description 客户欠款汇总表 SumOfCustArrears
* @params { 根据开始日期(startDate)，结束日期(endDate)，客户(ctCode)来汇总客户欠款 }
*/
export const getAccRAnalyzer = ({ startDate,endDate,ctCode,token}) => {
    //参数
    let data = {
      startDate,
      endDate,
      ctCode,
      token
     }
     
    if(config.isRunApp){
      //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
      data= {values: data} 
    } 
    return axios.request({
      url: `${apiPath}/report/simple/aspAccRAnalyzer`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
        return Qs.stringify(data) 
  
      }],
    })
  }

/**
* @description 全厂综合报表 CompFactoryReport
* @params { 根据开始日期(startDate)，结束日期(endDate),token来获取全厂综合报表 }
*/
export const getColligateAnalyzer = ({ startDate,endDate,token}) => {
    //参数
    let data = {
      startDate,
      endDate,
      token
     }
     
    if(config.isRunApp){
      //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
      data= {values: data} 
    } 
    return axios.request({
      url: `${apiPath}/report/simple/aspSysColligateAnalyzer`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
        return Qs.stringify(data) 
  
      }],
    })
  }
  
/**
* @description 订单查询 paperOrderQuery
* @params { 根据开始日期(startDate)， 
    结束日期(endDate) ，
    客户编号(ctCode)，
    汇总方式(mode)来获取订单信息。
    入参：startDate,endDate,ctCode,mode,token,size(前多少条数，
    默认20条)；结果集是个map：key--orderData(订单数据)，topData(前多少条数据) }
*/
export const getPaperCOQueryAnaly = ({ startDate,endDate,ctCode,token,mode,size }) => {
    //参数
    let data = {
      startDate,
      endDate,
      ctCode,
      token,
      mode,
      size
     }
     
    if(config.isRunApp){
      //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
      data= {values: data} 
    } 
    return axios.request({
      url: `${apiPath}/report/simple/aspSysPaperCOQueryAnaly`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
        return Qs.stringify(data) 
  
      }],
    })
  }
  
/**
* @description 送货查询 deliveryQuery
* @params { 
    根据开始日期(startDate)， 
    结束日期(endDate) ，客户编号(ctCode)查询送货信息。
    入参：startDate,endDate,ctCode,token; 
        }
*/
export const getPaperDeliTotal = ({ startDate,endDate,ctCode,token }) => {
  //参数
  let data = {
    startDate,
    endDate,
    ctCode,
    token
   }
   
  if(config.isRunApp){
    //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
    data= {values: data} 
  } 
  return axios.request({
    url: `${apiPath}/report/simple/aspSysPaperDeliTotal`,
    data,
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
      return Qs.stringify(data) 

    }],
  })
}

