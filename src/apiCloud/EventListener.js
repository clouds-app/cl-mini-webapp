/**
 *   EventListener APICloud 内部事件监听
 * 
 *  @detail :https://docs.apicloud.com/Client-API/api#72
 */

//当前是否生成环境/测试环境
const isApp = process.env.NODE_ENV === 'development' ? false : true 
//接收消息
export const MessageRegister = (MethodName,params) =>{
    if(!isApp) return  Promise.resolve() //网页版本不需要
    window.api.addEventListener({name: MethodName}, 
        function(ret, err) {
            return new Promise((resolve,reject)=>{
                if (ret) {
                    resolve(ret) 
                } else {
                    reject(JSON.stringify(err))
                }
            })
        });
}

//发送消息
export const MessageSend = (MethodName,params) =>{
    if(!isApp) return
    api.sendEvent({
        name: MethodName,
        extra: params  //描述：（可选项）附带的参数。在监听页面的回调里面通过 ret.value 获取。
    });
}

 /** 下拉刷新 */
export const RefreshDataInfo = () =>{
    window.api.setRefreshHeaderInfo({
        bgColor: '#ccc',
        textColor: '#fff',
        textDown: '下拉刷新...',
        textUp: '松开刷新...'
    }, function(ret, err) {
        return new Promise((resolve,reject)=>{
            if (ret) {
                resolve(ret) 
            } else {
                reject(JSON.stringify(err))
            }
        })
    })
}

