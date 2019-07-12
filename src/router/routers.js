import Home from '_c/main'

export default[
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
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
      component: () => import(/* webpackChunkName: "about" */ '@/views/login/login.vue'),
     
    },
  ]