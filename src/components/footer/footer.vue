<template>
    <div>
          
        <van-row class="footer">
            <van-tabbar :safe-area-inset-bottom="true" v-model="active">
            <van-tabbar-item icon="home-o">审批</van-tabbar-item>
            <van-tabbar-item icon="search">预警</van-tabbar-item>
            <van-tabbar-item icon="friends-o">仓库</van-tabbar-item>
            <van-tabbar-item icon="setting-o">报表</van-tabbar-item>
            </van-tabbar>
        </van-row>
              <!-- 占位符 -->
         <div class="footerMargin"></div>
    </div>
</template>

<script>
export default {
    name:'footer-view',
    data(){
        return{
            active:0
        }
    }
    
}
</script>
<style scoped>
 .footerMargin{
     margin-top:54px;
 }
</style>
