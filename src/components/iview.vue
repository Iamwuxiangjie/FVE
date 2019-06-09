<template>
  <layout>
    <Header>Header</Header>
    <Layout>
      <Sider hide-trigger>
        <collapse :list="userInfoList"/>
      </Sider>
      <Content>
        <Table class="iview_table" :columns="table_columns" :data="userInfoList"></Table>

        <UserAddModal/>
        <UserEditModal ref="UserEditModal"/>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </layout>

</template>

<script>
    import Layout from "iview/src/components/layout/layout";
    import collapse from './plugin/collapse'
    import UserAddModal from './plugin/user_add_modal'
    import UserEditModal from './plugin/user_edit_modal'

    import {mapState,mapGetters,mapActions} from 'vuex'

    export default {
      components: {Layout,collapse,UserAddModal,UserEditModal},
      name: "iview",


      data(){
        return {
          table_columns:[
            {
              title:'用户名',
              key:'name',
            },
            {
              title:'内容',
              key:'content',
            },
            {
              title:'生日',
              render:(h,parames)=>{
                const self=this;
                let birthday=''
                if(parames.row.birthday){
                  const date=parames.row.birthday
                  birthday=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
                }
                return  h('div',{},birthday)
              }

            },
            {
              title:'操作',
              render:(h,parames)=>{
                const self=this;
                const btn_del=h('Button',{
                  on:{
                    click:function(){
                      self.del_user_item(parames.index);
                    }
                  },
                  props: {
                    size: 'small'
                  },
                },'删除')

                const btn_edit=h('Button',{
                  on:{
                    click:function(){
                      const UserEditModal=self.$refs.UserEditModal
                      const item=self.selectItem(parames.index)
                      UserEditModal.show=true;
                      UserEditModal.user=item
                      UserEditModal.id=parames.index
                    }
                  },
                  props: {
                    size: 'small'
                  },
                },'修改')

                return  h('div',{},[btn_edit,btn_del])
              }
            },
          ],
        }
      },

      methods:{
        ...mapActions(['add_user_item','del_user_item']),
      },

      computed:{
        ...mapState(['userInfoList']),
        ...mapGetters(['selectItem'])
      },


    }
</script>

<style scoped lang="less">
@red: red;
@iview_table:.iview_table;


.funmargin(@left,@top){
  margin:@left  @top;
};

@{iview_table}{
  .funmargin(1rem,1rem);
};



</style>
