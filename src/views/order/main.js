import Vue from 'vue'
import App from './order.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/resetUi.css' //重置樣式
Vue.use(Vant)

/**
 * @description 全局注册应用配置 add by andy 2019-04-22  
 */
Vue.prototype.$config = config

Vue.config.productionTip = false

if(config.isRunApp){
  window.apiready = () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  }
}
else{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
}
