import  Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

export function createVueStore(){
  return new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })
}
