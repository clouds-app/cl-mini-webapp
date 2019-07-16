<template>
    <div>
            <!-- 占位符 -->
         <div class="footerMargin"></div>
        <van-row class="footer">
            <van-tabbar :safe-area-inset-bottom="true" v-model="active">
            <van-tabbar-item @click.native="turnToPage('login')" icon="home-o">审批</van-tabbar-item>
            <van-tabbar-item @click.native="turnToPage('index')" icon="search">预警</van-tabbar-item>
            <van-tabbar-item icon="friends-o">仓库</van-tabbar-item>
            <van-tabbar-item icon="setting-o">报表</van-tabbar-item>
            </van-tabbar>
        </van-row>

    </div>
</template>

<script>
import * as switchMethods  from '@/libs/switchMethods'
export default {
    name:'footer-view',
    data(){
        return{
            active:0
        }
    },
    watch:{
        active(oldValue,newValue){
            //console.log('active :'+oldValue,newValue)
        }
    },
    computed:{
        // activeHandle(){
        //     if(active) 
        // }
    },
    methods:{
        handleActive(){

        }, 
        //跳转到指定页面，默认字符串
       turnToPage(path){
          let params ={
              name:path
          }
          switchMethods.turnToPage(params)
      },
    }
    
}
</script>
<style scoped>
 .footerMargin{
     margin-top:54px;
 }
</style>
