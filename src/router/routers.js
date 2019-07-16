import Home from '_c/main'
import Login from '@/views/login/login.vue'
import Report from '@/views/report/report.vue'
import CompFactoryReport from '@/views/report/frame/s_compFactoryReport/App.vue'
import DeliveryQuery from '@/views/report/frame/s_deliveryQuery/App.vue'
import PaperOrderQuery from '@/views/report/frame/s_paperOrderQuery/App.vue'
import SumOfCustArrears from '@/views/report/frame/s_sumOfCustArrears/App.vue'
export default[
    {
      path: '/',
      redirect: { name: 'index' }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      // children:[
      //   {
      //       path:'about',
      //       component: () => import(/* webpackChunkName: "about" */ '@/views/index/About.vue')
      //   },
      
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
     // component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
     
    },
    // {
    //   path: '/order',
    //   name: 'order',
    //   //component: order,
    //   component: () => import(/* webpackChunkName: "order" */ '@/views/order/order.vue'),
     
    // },
    {
      path: '/report',
      name: 'report',
      component: Report,
      //component: () => import(/* webpackChunkName: "report" */ '@/views/report/report.vue'),
    },
    {
      //全厂综合报表 CompFactoryReport
      path: '/compFactoryReport',
      name: 'compFactoryReport',
      component: CompFactoryReport,
     // component: () => import(/* webpackChunkName: "compFactoryReport" */ '@/views/report/frame/s_compFactoryReport/App.vue'),
    },
    {
      // 送货查询 deliveryQuery
      path: '/deliveryQuery',
      name: 'deliveryQuery',
      component: DeliveryQuery,
      //component: () => import(/* webpackChunkName: "deliveryQuery" */ '@/views/report/frame/s_deliveryQuery/App.vue'),
    },
    {
      //订单查询 paperOrderQuery
      path: '/paperOrderQuery',
      name: 'paperOrderQuery',
      component: PaperOrderQuery,
      //component: () => import(/* webpackChunkName: "paperOrderQuery" */ '@/views/report/frame/s_paperOrderQuery/App.vue'),
    },
    {
      //客户欠款汇总表 SumOfCustArrears
      path: '/sumOfCustArrears',
      name: 'sumOfCustArrears',
      component: SumOfCustArrears,
     // component: () => import(/* webpackChunkName: "sumOfCustArrears" */ '@/views/report/frame/s_sumOfCustArrears/App.vue'),
    },
    
  ]