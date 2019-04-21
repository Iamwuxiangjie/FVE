<template>
  <div style="width:980px">
  <dropdown url="www.baidu.com" method="get" text="text"  :clickChange="zjChange"></dropdown>

  </div>
</template>

<script>
  import dropdown from '@/components/plugin/dropdown'
  export default {
      name: "login.vue",
      data() {
        return {
          zjList:[
            {
              text:'请选择章节',
              id:-1,
            },
            {
              text:'第一章',
              id:0,
            },
            {
              text:'第二章',
              id:1,
            },
          ],
        }
      },
      methods:{
        init:function () {

        },
        zjChange:function(item){
          console.log(item);
        }
      },
      created:function () {
        this.init();
      },
      components:{
        dropdown
      }
  }
</script>

<style scoped>

</style>
