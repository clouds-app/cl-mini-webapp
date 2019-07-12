<template>
    <div class="NavBarcontainer" id="appheader">
        <van-nav-bar :fixed="true"
                :title="title"
                left-text=""
                right-text="菜单"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                >
                <template slot="right">
                    <div>
                        <van-icon size="20" color="white" name="search" />
                    </div>
                 </template>
              
                 <template slot="left">
                    <div>
                      <van-icon size="20" color="white" name="arrow-left" />
                    </div>
                 </template>
         </van-nav-bar>
           <!-- // 具名插槽 -->
        <slot name="up"></slot>
        <!-- // 匿名插槽 -->
        <slot></slot>
        <!-- // 具名插槽 -->
        <slot name="down"></slot>

            <!-- 占位符 -->
         <div class="headerMargin"></div>
    </div>
</template>
<script>
export default {
    name:'header-view',
    props:{
        title:{
            type:String,
            default:'晨龙ERP'
        }
    },
    data(){
        return{

        }
    },
    methods: {
    onClickLeft() {
      //this.toast('返回');
    },
    onClickRight() {
     // this.toast('按钮');
    }
  }
    
}
</script>
<style scoped>
.headerMargin{
    margin-top:50px;
}
.NavBarcontainer{
    background-color:#3296fa
}
.van-nav-bar{
      background-color:#3296fa
    }
.van-nav-bar__title{
        font-weight: bold;
        color: #fff;
} 
</style>
