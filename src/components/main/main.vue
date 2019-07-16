<template>
    <div>
        <headerview></headerview>
            <van-row  class="body">
                <van-button @click="turnToPage('login')" type="default">登陸</van-button>
                <van-button @click="turnToPage('compFactoryReport')" type="primary">全厂综合报表</van-button>
                <van-button @click="turnToPage('deliveryQuery')" type="info">送货查询</van-button>
                <van-button @click="turnToPage('paperOrderQuery')" type="warning">订单查询</van-button>
                <van-button @click="turnToPage('sumOfCustArrears')" type="danger">客户欠款汇总表</van-button>
                <van-grid square :border="false" :column-num="3">
                    <van-grid-item
                        v-for="value in 36"
                        :key="value"
                        icon="photo-o"
                        text="文字"
                    />
                </van-grid>
                   <van-button type="default">默认按钮</van-button>
                <van-button type="primary">主要按钮</van-button>
                <van-button type="info">信息按钮</van-button>
                <van-button type="warning">警告按钮</van-button>
                <van-button type="danger">危险按钮</van-button>
            </van-row>
         <footerview></footerview>
    </div>
</template>
<script>
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
export default {
    name:'main-view',
    mixins:[baseMixin],
    data(){
        return{
            currentToken:'',//当前用户TOKEN,登陆成功后获取
            currentMenuList:[] //当前用户菜单，通过token查询获取
        }
    },
    created(){
        //初始化数据
        this.currentToken = getToken()
    },
    mounted(){
        this.$nextTick(()=>{
          //查询用户菜单
        this.getMenuList()
        })
      
    },
    methods:{
        //导入合并方法，然后可以直接使用，和methods中方法类似，但参数需要查看原始定义方法 = this.$store.dispatch('getMenuByToken_action',params)
        ...mapActions(['getMenuByToken_action']),
        //查询获取菜单BY TOKEN
        getMenuList(){
            if(this.currentToken=="" || this.currentToken==null){
                // this.turnToPage('login')
                // return
                this.$toast('currentToken 为空')
            }
            let params={
               token:this.currentToken
            }
            let _self =this 
            this.getMenuByToken_action(params).then(res=>{
                  _self.currentMenuList =res
            }).catch(err=>{
                _self.$toast('获取菜单失败:'+err)
            })
        }


    }
}
</script>