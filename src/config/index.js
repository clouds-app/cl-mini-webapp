
const is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
/**
 * @returns {String} 当前浏览器名称
 */ 
const getExplorer = () => {
  const ua = window.navigator.userAgent
  const isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'IE'
  else if (isExplorer('Firefox')) return 'Firefox'
  else if (isExplorer('Chrome')) return 'Chrome'
  else if (isExplorer('Opera')) return 'Opera'
  else if (isExplorer('Safari')) return 'Safari'
}

console.log("is_mobi:"+is_mobi)
console.log("getExplorer:"+getExplorer())
export default {
    /**
     * @description 默认页面标题
     */
     title: 'webApp',
    /**
     * @description 是否app 运行环境
     */
    isRunApp: process.env.NODE_ENV === 'production',//is_mobi,//
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description api请求基础路径 
     */
    baseUrl: {
      dev: '',
      pro: 'http://192.168.168.101:8080'//clerp-app-api/
    },
    
	baseImgUrl:'http://192.168.168.101:8080/clerp-app-api',

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 需要加载的插件
     */
    plugin: {
      // 'error-store': {
      //   showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      //   developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
      // }
    }
  }
  