<style scoped rel="less">
  .fade-enter-active{
    animation: fade-in 2s reverse;

  }
 /* */
  .fade-leave-active {
    animation: fade-in 2s ;

  }


  @keyframes fade-in {
    0% {
      transform: translateX(0px);
      opacity:0;
    }
    50% {
      transform: translateX(10px);
      opacity:1;
    }
    100% {
      transform: translateX(20px);
      opacity:0;
    }
  }
</style>

<template>
    <div>
      <el-button @click="show=!show">change</el-button>
      <p v-show="false" v-text="data"/>
      <transition name="fade">
        <p v-show="show" v-text="'123'"/>
      </transition>
      <transition name="fade">
        <p v-show="show" v-text="'123'"/>
      </transition>
    </div>
</template>

<script>
  import {githubsearch} from '../api/index.js'

  export default {
    name: "ajax",
    data(){
      return {
        show:false,
        data:'',
      }
    },

    methods:{
      async init(){
        var self=this;
        /*let url='https://api.github.com/search/repositories?q=vue&sort=starts';
        //https://api.github.com//search/repositories/?q=vue&sort=starts
        this.$http.get(url).then(
          reponse => {
            self.data=reponse.data;
          }
        ).catch(
          error=>{
            self.data=('失败');
          }
        )*/

        /*const result =await githubsearch('vue','starts')*/

        githubsearch('vue','starts')
          .then(
            response=>{
              console.log('success')
              self.data=response;
              self.show=true;
            },
            error=>{
              console.log('error');
            }
          )
          .catch(
            e=>{
              console.log('exception');
            }
          );


        /*if(result){
          self.data=result;
        }*/
      }
    },

    mounted(){
      this.init();
    }
  }
</script>


