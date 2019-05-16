import { login, logout, getUserInfo, } from '@/api/app'
import { setToken, getToken,setCookie,getCookie,removeCookie} from '@/libs/util'
import { GetGuid } from '@/libs/tools'
const serverBusyTips="服务繁忙，请稍后再试！";

export default {
    state: {
      userName: getCookie('userName'),
      userId: getCookie('userId'),
      avatorImgPath: '',
      token: getToken(),
      access: localStorage.getItem('access') ,
      hasGetInfo: false
    },
    mutations: {
      setAvator (state, avatorPath) {
        state.avatorImgPath = avatorPath
      },
      setUserId (state, id) {
        state.userId = id
              setCookie('userId',id);
      },
      setUserName (state, name) {
        //debugger
        state.userName = name;
              setCookie('userName',name);
      },
      setAccess (state, access) {
        state.access = access
        localStorage.setItem('access',access);
      },
      setToken (state, token) {
        state.token = token
        setToken(token)
      },
      setHasGetInfo (state, status) {
        state.hasGetInfo = status
      }
    },
    actions: {
    
      // 用户登录
      handleLogin ({ commit }, {username, password}) {
        // username = username.trim()
        return new Promise((resolve, reject) => {
          login({
            username,
            password
          }).then(res => {
              //console.warn(res)
            const data = res.data
            if(data.success)
            {
              commit('setToken', username+GetGuid())//data.token
                          commit('setUserId',data.data.USERID);
                          commit('setUserName',data.data.USERNAME);
              resolve()
            }
            else
            {
              reject(data.msg)
             
            }
           
          }).catch(err => {
            console.error(err)
            reject(serverBusyTips)
          })
        })
      },
      // 退出登录
      handleLogOut ({ state, commit }) {
          commit('setToken', '')
          commit('setUserId','');
          commit('setUserName','');
          removeCookie('userName'); 
          removeCookie('userId'); 
        return new Promise((resolve, reject) => {
          logout().then(() => {
            // commit('setToken', '')
            // commit('setUserId','');
            // commit('setUserName','');
            resolve()
          }).catch(err => {
            reject(err)
          })
          // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        
        })
      },
      // 获取用户相关信息
      getUserInfo ({ state, commit }) {
        return new Promise((resolve, reject) => {
          try {
            getUserInfo(state.token).then(res => {
              const data = res.data
              commit('setAvator', data.avator)
              commit('setUserName', data.name)
              commit('setUserId', data.user_id)
              commit('setAccess', data.access)
              commit('setHasGetInfo', true)
              resolve(data)
            }).catch(err => {
              reject(err)
            })
          } catch (error) {
            console.error(err)
            reject(serverBusyTips)
          }
        })
      },
     
    }
  }