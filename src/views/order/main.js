import Vue from 'vue'
import App from './order.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'

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
