<template>
    <div>
      <Modal
        v-model="show"
        title="修改"
        @on-ok="ok">
        <Form ref="form" :model="user" :rules="rule" inline>
          <FormItem label="用户名" prop="name">
            <Input v-model="user.name" placeholder="请输入用户名"></Input>
          </FormItem>

          <FormItem label="简介">
            <Input v-model="user.content" placeholder="请输入简介"></Input>
          </FormItem>

          <FormItem label="生日">
            <DatePicker type="date" format="yyyy-MM-dd" v-model="user.birthday" placeholder="请输入生日" style="width: 200px"></DatePicker>
          </FormItem>

        </Form>

      </Modal>
    </div>

</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "user_modal",


    data() {
      return {
        show: false,
        user:{

        },
        id:'',
        birthday:'',
        rule: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      ...mapActions(['edit_user_item']),
      ok() {
        const self=this;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.edit_user_item({id:self.id,item:self.user});
            self.user={};
            this.$Message.success('修改成功!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },


    },


    mounted(){

    },

    computed:{

    },
  }
</script>

<style scoped>

</style>
