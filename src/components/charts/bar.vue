<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
// import echarts from 'echarts'
 // 重点：此位置引入的是你单独配置的echarts
 import echarts from '@/libs/echarts' //按需加载
import tdTheme from './theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    sortGroup:{
         type:String,
         default:'天'
    },
    value: Array,
    text: String,
    subtext: String
  },
  data () {
    return {
      dom: null, yAxisUnit:'面积'
    }
  },
  watch:{
    value(val){
      if(val){
         //console.log('数据变化：...')
        this.initData()
      }
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    //获取图表数据
    getSeriesData(itemList){
      let tempList = []
      for(let item in itemList){
        //debugger
        //损耗率=不良面积/良品面积*100    保留两位小数
        let WasteArea =  0
        if(itemList[item].FinishArea!="" && itemList[item].FinishArea!="0" && itemList[item].BadArea!='0'){
         // debugger
          let up1 =Number.parseFloat(itemList[item].BadArea)
          let down1 =Number.parseFloat(itemList[item].FinishArea)
          WasteArea= (up1/down1 * 100)
          WasteArea = WasteArea.toFixed(2)
        }

        //车速=生产米数/生产时间     车速单位：米/秒
        let runSpeed = itemList[item].AvgSpeed
        // if(itemList[item].ProdTime!="" && itemList[item].ProdTime!="0"){
        //   let up1= Number.parseFloat(itemList[item].FinishLength)
        //   let down1 =Number.parseFloat(itemList[item].ProdTime)
        //   runSpeed= up1/down1
        //   runSpeed = runSpeed.toFixed(2)
        // }
       
       let currentData = new Date()
       let currentYear=  currentData.getFullYear()

        let params = {
                  PDate:itemList[item].PDate.replace(currentYear+'/',''),
                  FinishArea:Number.parseFloat(itemList[item].FinishArea),
                  FinishLength:Number.parseFloat(itemList[item].FinishLength),
                  runSpeed:runSpeed,
                  WasteArea:WasteArea,
                  BreakCount:Number.parseFloat(itemList[item].BreakCount),
                  } 
              
         let seriesData = Object.values(params)
         //debugger
         tempList.push(seriesData)
       }
       return tempList
      },
      //获取bar总数
    getSeriesCount(num){
     // debugger
      let seriesArray  = []
      for (var i = 0; i < num; i++) {  
           let series={
              type: 'bar'
            } 
        seriesArray.push(series)
      }  
      return seriesArray
   },
   //处理Y 轴 单位 
   handleYAxisUnit(params){
        //debugger
        switch(params.name){
               case '面积':
              this.yAxisUnit ='面积'
              break;
                case '米数':
              this.yAxisUnit ='米数'
              break;
                case '车速':
              this.yAxisUnit ='车速'
              break;
                case '损耗':
              this.yAxisUnit ='损耗'
              break;
               case '停次':
              this.yAxisUnit ='停次'
              break;
              default:
             this.yAxisUnit ='面积'
                 break;
          }
   },
   //初始化数据
   initData(){
       let _self = this
       let tempValue =this.value
       let sortGroup =this.sortGroup
       let yAxisUnit =this.yAxisUnit
       //debugger
       if(tempValue){
            let seriesData = _self.getSeriesData(tempValue)
      // console.warn('seriesData'+seriesData)
       let option = {
        legend: {
           align: 'right',
           orient:'vertical',
           itemWidth:38,
           itemHeight:22,
           top:16,
           left:8,
           selectedMode:'single', //单选
           //type: 'scroll',
           inactiveColor:'rgba(0,23,11,0.3)',
           textStyle:{color:'#000'}
        },
         grid: [
                 {top:26,left:140} //x: '100%', y: '7%', width: '38%', height: '38%',
         ],
        tooltip: {
          // 绝对位置，相对于容器左侧 10px, 上侧 10 px
          // position: [10, 10]
          //   position: function (point, params, dom, rect, size) {
          //     // 固定在顶部
          //     return [point[0], '10%'];
          // }
          // 相对位置，放置在容器正中间
          position: ['50%', '5%']
        },
         dataZoom: [
            {
                type: 'slider',
                show: true,
                start: 94,
                end: 100,
                handleSize: 18
            },
            {
                type: 'inside',
                start: 94,
                end: 100
            },
            {
                type: 'slider',
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 12,
                height: '70%',
                handleSize: 8,
                showDataShadow: false,
                left: '93%'
            }
        ],
        dataset: {
            // 提供一份数据。
            dimensions:  ['product', '面积', '米数', '车速','损耗','停次'],
            //dimensions:  ['product', 'LineID','ClassID', 'PDate','FinishArea','BadArea','FinishLength', 'BadLength','FinishWt','BadWt', 'BreakCount','BreakTime','ProdTime', 'BadRate','AvgSpeed'],
            source: seriesData
          
        },
        // title: {
        // text: this.text,
        // subtext: this.subtext,
        // x: 'center',
        // y: 0
        // },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: [
               {type: 'category', name: `(${sortGroup})`},
               ],
        // 声明一个 Y 轴，数值轴。
          yAxis:{},
        // yAxis: [
        //     {
        //         name: `${yAxisUnit}`
        //     }
        // ],
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: _self.getSeriesCount(5)
    }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')

      // 图例开关的行为只会触发 legendselectchanged 事件
   
      // this.dom.on('legendselectchanged', (params)=>{
      //     let _that =this
      //     // 获取点击图例的选中状态
      //     let isSelected = params.selected[params.name];
      //     // _that.handleYAxisUnit(params)
      //      //option.yAxis.name='BBBBB'
      //     // console.log(option)
      //     switch(params.name){
      //          case '面积':
      //         option.yAxis.name ='面积'
      //         break;
      //           case '米数':
      //         option.yAxis.name ='米数'
      //         break;
      //           case '车速':
      //        option.yAxis.name ='车速'
      //         break;
      //           case '损耗':
      //        option.yAxis.name ='损耗'
      //         break;
      //          case '停次':
      //         option.yAxis.name='停次'
      //         break;
      //         default:
      //        option.yAxis.name ='面积'
      //            break;
      //     }
      //     _that.dom.setOption(option)
      // });

      this.dom.setOption(option)

      on(window, 'resize', this.resize)
    }
     
   } 
},
  mounted () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
