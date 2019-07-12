<template>
  <div id="app">

  </div>
</template>
<script>
export default {
  name:'order',
  data(){
    return {
      access:'',
    }
  },
  computed:{
      NewAccess(){
        return this.$store.state.app.access
      }
  },
  mounted(){
    //this.access =this.$store.state.app.access
  },
  methods:{
      // 跳转订单页面
    order () {
      window.api.closeToWin({
        name: 'order',
        url: 'order.html',
        reload:true
      })
    },
    // 跳转我的页面
    mine () {
      window.api.closeToWin({
        name: 'index',
        url: 'index.html',
        reload:true
      })
    },
      handleModifyAccress(){
         this.$store.commit('setAccess','order modify admin')
         console.warn('修改 order accress')
      },
       // 打开订单页面frame
    openFrame () {
      window.api.openFrame({
        name: 'orderDetailFrame',
        url: 'orderDetailFrame.html',
        rect: {
          x: 60,
          y: 0,
          w: 'auto',
          h: 'auto'
        }
      })
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
