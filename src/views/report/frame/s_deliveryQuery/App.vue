<template>
  <div id="app">
   <headerview></headerview>
            <van-row  class="body">
                    <van-cell :border="false" title="主体内容" >
                        deliveryQuery
                    </van-cell>
            </van-row>
         <footerview></footerview>
  </div>
</template>
<script>
/**
 * @description  送货查询 deliveryQuery
 */
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'deliveryQuery',
  mixins:[baseMixin],
   data(){
    return {
      dataSource:[] //数据源
    }
  },
  created(){
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
    ...mapActions(['getPaperDeliTotal_action']),
    //获取送货数据
    getDataSource(){
      //根据开始日期(startDate)， 结束日期(endDate) ，客户编号(ctCode)查询送货信息。
      //入参：startDate,endDate,ctCode,token;
       let params={
          startDate:'2019-07-10',
          endDate:'2019-07-10',
          ctCode:'1',
          token:getToken()
        }
        let _self =this
        this.getPaperDeliTotal_action(params).then(res=>{
            _self.dataSource =res
        }).catch(err=>{
            _self.$toast('获取数据失败:'+err)
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
  // text-align: center;
  // color: #2c3e50;
}

</style>
