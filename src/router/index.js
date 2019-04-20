import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
      ]
    },

  ]
});
export default router;
