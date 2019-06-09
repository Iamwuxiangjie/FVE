<template>
    <div>
      <el-input-number :step="1" :min="0" :max="100" v-model="reallyscore" @change="scoreChange"></el-input-number>

      <slot  :data="reallyscore"></slot>
      <slot name="test"></slot>
    </div>
</template>

<script>
    export default {
      name: "input_number",
      inject: ['getScore'],
      props:{
        score: {
          required: true,
          type: Number,
          default:0
        },
        scoreChange:Function,
      },

      data(){
        return {
          reallyscore:0,
        }
      },

      mounted(){
        this.reallyscore=this.getScore;

      },

      methods:{

      }
    }
</script>

<style scoped>

</style>
