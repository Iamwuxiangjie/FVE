
export default {

  lastItem:(state)=>{
    let lastIndex=state.data.length;
    return lastIndex==0?'没有数据':state.data[lastIndex-1].name;
  },

  selectItem:(state) => (index)=>{
    const item=state.userInfoList[index]
    return item
    return {
      name:item.name,
      content:item.content,
      birthday:item.birthday
    }
  }

}
