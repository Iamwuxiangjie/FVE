
import {
  ADD_ITEM,DEL_ITEM,
  ADD_USER_ITEM,DEL_USER_ITEM,EDIT_USER_ITEM
} from './constants'

export default {

  [ADD_ITEM]({commit},item){
    commit(ADD_ITEM,item);
  },

  [DEL_ITEM]({commit},index){
    commit(DEL_ITEM,index);
  },

  [ADD_USER_ITEM]({commit},item){
    commit(ADD_USER_ITEM,item);
  },

  [DEL_USER_ITEM]({commit},item){
    commit(DEL_USER_ITEM,item);
  },

  [EDIT_USER_ITEM]({commit},index,item){
    commit(EDIT_USER_ITEM,index,item);
  },


}
