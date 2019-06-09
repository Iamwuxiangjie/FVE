
import Vue from 'vue'
import App from './App'
import router from './router'

//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//vue_resource
import vue_resource from 'vue-resource'
Vue.use(vue_resource);


/*import axios from 'axios'
Vue.prototype.$ajax = axios*/


//store
import {createVueStore} from './store/index'

//iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false


const store=createVueStore();

const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
