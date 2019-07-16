import { getAccRAnalyzer,getColligateAnalyzer,getPaperCOQueryAnaly,getPaperDeliTotal } from '@/api/report'
import config from '@/config'
import {setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    state: {
     
    },
    mutations: {
     
    },
    actions: {
    /**
    * @description 客户欠款汇总表
    * @params { 根据开始日期(startDate)，结束日期(endDate)，客户(ctCode)来汇总客户欠款 }
    */
     getAccRAnalyzer_action({commit},params){
      
        return new Promise((resolve,reject)=>{
          try {
            getAccRAnalyzer(params).then(res=>{
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              } 
            }).catch(err=>{
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
    /**
    * @description 全厂综合报表
    * @params { 根据开始日期(startDate)，结束日期(endDate),token来获取全厂综合报表 }
    */
     getColligateAnalyzer_action ({commit}, params) {
        return new Promise((resolve, reject) => {
          try {
            getColligateAnalyzer(params).then(res => {
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err => {
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
      
         
        })
      },
     /**
    * @description 订单查询
    * @params { 根据开始日期(startDate)， 
        结束日期(endDate) ，
        客户编号(ctCode)，
        汇总方式(mode)来获取订单信息。
        入参：startDate,endDate,ctCode,mode,token,size(前多少条数，
        默认20条)；结果集是个map：key--orderData(订单数据)，topData(前多少条数据) }
    */
     getPaperCOQueryAnaly_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
            getPaperCOQueryAnaly(params).then(res=>{
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err=>{
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
       /**
        * @description 送货查询
        * @params { 
            根据开始日期(startDate)， 
            结束日期(endDate) ，客户编号(ctCode)查询送货信息。
            入参：startDate,endDate,ctCode,token; 
                }
        */
     getPaperDeliTotal_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
            getPaperDeliTotal(params).then(res=>{
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err=>{
              console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      }

    }
  }