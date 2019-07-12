<template>
  <div id="app">
       i am login page view
       <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    
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
