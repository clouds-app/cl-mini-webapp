<template>
  <div id="app">
      <headerview></headerview>
            <van-row  class="body">
                    <van-cell title="登陆" >
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
                    <van-cell title="确认" >
                        <template slot="title">
                           <van-button size="large" hairline round type="info">登  陆</van-button>
                        </template>
                   </van-cell>
            </van-row>
         <footerview></footerview>
  </div>
</template>

<script>
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'login',
  mixins:[baseMixin],
  data(){
    return {
      loginForm:{
          username:'',
          password:''
      }
   
    }
  },
  computed:{
  
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
