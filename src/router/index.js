import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'

import progress from '@/components/progress'
import judge from '@/components/judge'
import forward from '@/components/forward'
import ajax from '@/components/ajax'
import store from '@/components/store'
import iview from '@/components/iview'

import WEB from '@/view/index'
import MixedCharts from '@/view/highcharts/MixedCharts'
import VariableRangesCurves from '@/view/highcharts/VariableRangesCurves'

Vue.use(Router)

const router=new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/login',
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: 'register',
          name: 'register',
          component: Register,
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'progress',
          name: 'progress',
          component: progress,
        },
        {
          path: 'judge',
          name: 'judge',
          component: judge,
        },
        {
          path: 'forward',
          name: 'forward',
          component: forward,
        },
        {
          path: 'ajax',
          name: 'ajax',
          component: ajax,
        },
        {
          path: 'store',
          name: 'store',
          component: store,
        },
        {
          path: 'iview',
          name: 'iview',
          component: iview,
          meta:{
            showBtnGroup:true,
          }
        },
      ]
    },
    {
      name:'WEB',
      path:'/web',
      component:WEB,
      children:[
        {
          name:'MixedCharts',
          path:'mixed-charts',
          component:MixedCharts,
        },
        {
          name:'VariableRangesCurves',
          path:'variable-ranges-curves',
          component:VariableRangesCurves,
        }
      ]
    }
  ]
});
export default router;
