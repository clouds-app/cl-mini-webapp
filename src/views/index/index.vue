<template>
  <div id="app">
    i am  index  <helloWorld/>
     <br/>
    <br/>
    {{msg}} + {{NewAccess}}
    <button @click="handleModifyAccress()">修改access</button>
     <br/>
      <br/>
     <a href="/order#/">order</a>
    <br/>
      <br/>
      <ul class="center">
     <li @click="login">用户登录</li>
      <li @click="order">跳转订单页面</li>
      <li @click="mine">跳转我的页面</li>
      <li @click="openScan">打开扫描</li>
    </ul>
  </div>
</template>

<script>
import helloWorld from '_c/HelloWorld.vue'
export default {
  name:'index',
  data(){
    return {
       msg:'this is index msg',
       access:''
    }
  },
  computed:{
      NewAccess(){
        return this.$store.state.app.access
      }
  },
  components: {
    helloWorld
  },
  mounted(){
    this.access =this.$store.state.app.access
  },
  methods:{
    openScan(){
      var FNScanner = window.api.require('FNScanner');
        FNScanner.open({
            autorotation: true
        }, function(ret, err) {
            if (ret) {
                alert(JSON.stringify(ret));
            } else {
                alert(JSON.stringify(err));
            }
        })
    },
    login(){
        window.api.openWin({
        name: 'login',
        url: 'login.html',
        reload:true
      })
    },
     // 跳转订单页面
    order () {
      api.openWin({
        name: 'order',
        url: 'order.html',
        reload:true
      })
    },
    // 跳转我的页面
    mine () {
      window.api.openWin({
        name: 'index',
        url: 'index.html',
         useWKWebView: true, // ←关键在这里
        reload:true
      })
    },
    handleModifyAccress(){
  
      this.$store.commit('setAccess','new admin')
      console.warn('修改accress')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
