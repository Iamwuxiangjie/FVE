<template>
  <div>
    <h1>REGISTER</h1>
    {{user.name}}
    <input type="text" v-model="user.name"/>
    <button @click="showName">submit</button>
  </div>
</template>

<script>
    export default {
        name: "register.vue",
        data() {
          return {
            user:{
              name: ''
            },
          }
        },
        methods:{
          showName:function(){
            alert(this.user.name);
          }
        },
    }
</script>

<style scoped>

</style>
