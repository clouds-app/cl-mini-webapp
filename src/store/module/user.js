import { login } from '@/api/user'
import { setToken, getToken} from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！";


export default {
    state: {
      token: getToken(),
    },
    mutations: {
      setToken (state, token) {
        state.token = token
        setToken(token)
      }
    },
    actions: {
      // 用户登录
      handleLogin ({commit}, params) {
        return new Promise((resolve, reject) => {
          login(params).then(res => {
            const data = process.env.NODE_ENV === 'production' ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
            if(data.success)
            {
              resolve()
            }
            else
            {
              reject(data.msg)
            }
          }).catch(err => {
            console.error(JSON.stringify(err))
            reject(serverBusyTips)
          })
         
        })
      },

    }
  }