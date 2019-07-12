<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>


export default {
  name:'index',
  data(){
    return {
       msg:'this is index msg',
       access:''
    }
  },
  computed:{
     
  },
  components: {
  
  },
  mounted(){
  
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
  
}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

</style>
