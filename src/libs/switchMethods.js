/**
 * @switchMethods
 * 
 * @description :用于测试环境和正式环境的方法切换，而前端方法一致，方便快速开发
 * 
 * @data : 2019-06-05 andy
 * 
 */
import router from '@/router'
//当前是否生成环境/测试环境
const isApp = process.env.NODE_ENV === 'development' ? false : true //

//跳转页面
export const turnToPage = (params) => {
    //debugger
    if (isApp) {
     //正式环境
     let slidBackEnabled = params.slidBackEnabled
     if(!slidBackEnabled){
      slidBackEnabled =false
     }
     window.api.openWin({
          name: `${params.name}`,
          url: `./${params.name}.html`,
          reload:true,
          slidBackEnabled,
          pageParam: {
              //name: 'test'
          }
       })
    } else{
     //测试环境
      router.push(`/${params.name}`)
 
    }

  }

/**
 * 获取屏幕宽高,返回一个对象
 */
export const getViewportSize = () => {
  debugger
  if (isApp) {
   //正式环境

  } else{
   //测试环境
    let objWH = {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
     return objWH
  }

}


