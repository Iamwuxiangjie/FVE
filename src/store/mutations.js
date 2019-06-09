import {
  ADD_ITEM,DEL_ITEM,
  ADD_USER_ITEM,DEL_USER_ITEM,EDIT_USER_ITEM
} from './constants'

export default {

  [ADD_ITEM](state,item){
    state.data.push({
      name:item.name+'副本'
    });
  },

  [DEL_ITEM](state,index){
    state.data.splice(index,1);
  },

  [ADD_USER_ITEM](state,item){
    state.userInfoList.push(item);
  },

  [DEL_USER_ITEM](state,index){
    state.userInfoList.splice(index,1);
  },

  [EDIT_USER_ITEM](state,data){
    const item=data.item
    const source=state.userInfoList[data.id]
    source.name=item.name
    source.content=item.content
    source.birthday=item.birthday
  },


}
