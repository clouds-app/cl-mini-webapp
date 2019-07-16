<template>
  <div id="app">
      <headerview></headerview>
            <van-row  class="body">
                    <van-cell :border="false" title="登陆" >
                        <template slot="title">
                              <van-cell-group>
                                  <van-field
                                    v-model="loginForm.username"
                                    required
                                    clearable
                                    label="用户名"
                                    right-icon="question-o"
                                    placeholder="请输入用户名"
                                    @click-right-icon="$toast('question')"
                                  >
                                  <template slot="left-icon">
                                    <van-icon color="#3296fa" name="contact" />
                                  </template>
                                  </van-field>

                                  <van-field
                                    v-model="loginForm.password"
                                    type="password"
                                    label="密码"
                                    placeholder="请输入密码"
                                    required
                                  >
                                  <template slot="left-icon">
                                    <van-icon color="#3296fa" name="lock" />
                                  </template>
                                  </van-field>
                                </van-cell-group>
                        </template>
                    </van-cell>
                   
                    <van-cell :center="true"  :border="false" title="确认" >
                        <template slot="title">
                          <van-button @click="getUUID()" size="large" hairline round type="info">登  陆</van-button>
                        </template>
                   </van-cell>
            </van-row>
         <footerview></footerview>
  </div>
</template>

<script>
//E4E4E4
import md5 from 'js-md5';
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'login',
  mixins:[baseMixin],
  data(){
    return {
      //11/3102
      loginForm:{
          username:'11',
          password:'123456'
      },
      currentUUId:''
    }
  },
  computed:{
  
  },
  components: {

  },
  mounted(){
   //this.getUUID()
  },
  methods:{
        //导入合并方法，然后可以直接使用，和methods中方法类似，但参数需要查看原始定义方法 = this.$store.dispatch('handleLogin',params)
        ...mapActions(['getValidatorToken_action','Login_action','getMenuByToken_action']),
        //获取用户随机码
        getUUID(){
          let params ={
            userId:this.loginForm.username
          }
          let _self = this
          this.getValidatorToken_action(params).then(res=>{
             // console.log('getUUID success:'+res)
             _self.currentUUId = res.data
             _self.handleLogin()
          }).catch(err=>{
             // console.error('getUUID err:'+err)
              _self.$toast('获取UUID失败:'+err)
          })
        },
        //user login
        handleLogin(){
          if(this.loginForm.username!='' && this.loginForm.password!='')
          {
            //加密规则为md5(md5（用户密码+UUID）+UUID)
            //debugger
           let md5Pwd = md5(md5(this.loginForm.password+this.currentUUId)+this.currentUUId)
           let params={
             userId:this.loginForm.username,
             pwd:md5Pwd
           }
           let _self = this
           this.Login_action(params).then(res=>{
               _self.$toast('登陆成功')
               _self.turnToPage('index')
              //  setTimeout(() => {
              //      _self.turnToPage('index')
              //  }, 300);
              
           }).catch(err=>{
              _self.$toast('登陆失败:'+err)
           })
          }else{
             _self.$toast('用户名和密码必填')
          }
        },
    
    },
}
</script>

<style>

</style>
