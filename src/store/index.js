import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import user from './module/user'
import report from './module/report'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    app,
    user,
    report,

  }
})
