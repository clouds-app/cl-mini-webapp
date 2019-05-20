<template>
  <div id="app">
        <span class="loginTitle">用户登录</span> 
     <div class="container">
       <div class="usernName">
           <label for="userName">用户名：</label>
           <input id="userName" placeholder="输入用户名" v-model="loginForm.username" type="input"/>
       </div>
       <div class="userPassWord">
            <label for="userPassword">用户密码：</label>
           <input id="userName" placeholder="输入用户密码" v-model="loginForm.password" type="input"/>
       </div>
       <div class="submitButton">
            <button @click="hangleLogin()">登陆</button>
       </div>
     </div>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'login',
  data(){
    return {
      loginForm:{
          username:'aaaaaaaaaaa',
          password:'bbbbbbbbbbb'
      }
   
    }
  },
  computed:{
      // NewAccess(){
      //   return this.$store.state.app.access
      // }
  },
  components: {

  },
  mounted(){
   
  },
  methods:{
        //导入合并方法，然后可以直接使用，和methods中方法类似，但参数需要查看原始定义方法 = this.$store.dispatch('handleLogin',params)
        ...mapActions(['handleLogin']),
        //user login
        hangleLogin(){
          if(this.loginForm.username!='' && this.loginForm.password!='')
          {
           let params=this.loginForm
           this.handleLogin(params).then(res=>{
                alert('登陆成功！'+res)
           }).catch(err=>{
              alert('登陆失败！'+err)
           })
          }
        },
    
    },
}
</script>

<style lang="less">

</style>
