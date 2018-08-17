import Vue from 'vue'
import Router from 'vue-router'

import login from '../pages/login/login.vue'

import Home from '../pages/Home.vue'
import warningList from '../pages/warningList.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path:'/',
      component:Home,
      meta:{
        showHeader:false
      }
    },
    {
      path:'/warningList',
      component:warningList,
      meta:{
        showHeader:false
      }
    },
    {
      path:'/login',
      component:login,
      meta:{
        showHeader:false
      }
    },

  ]
})
