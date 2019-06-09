<template>
  <div class="container">
    <router-link to="http://www.baidu.com">
      <el-button>submit</el-button>
    </router-link>
    <div style="border: 1px solid green">
      <dropdown url="www.baidu.com" method="get" text="text">
        <div slot="input">
          {{input.name}}
          <el-input v-model="input.name" ></el-input>
        </div>
      </dropdown>
    </div>
    <div style="padding:2rem;border:2px solid green;font-size: 800%">
      <el-button @click="forwardAjax">ajax</el-button>
    </div>

  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import dropdown from '@/components/plugin/dropdown'

  export default {
    name: "forward",
    data(){
      return {
        input:{
          name:'123'
        }
      }
    },

    methods:{
      forwardAjax(){
        this.$router.push('/ajax');
      }
    },

    watch:{
      input:{
        deep:true,
        handler:function(newv,oldv){
          console.log(JSON.stringify(newv)+'----'+JSON.stringify(oldv));
        },
        immediate:true,
      }
    },

    components:{
      dropdown
    },

    mounted(){
      PubSub.subscribe('testdropdown',(name,item) =>{
        console.log('subscribe:'+JSON.stringify(item));
      });
    },
  }
</script>

<style scoped>

</style>
