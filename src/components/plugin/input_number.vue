<template>
    <div>
      <el-input-number :step="1" :min="0" :max="100" v-model="score" @change="scoreChange"></el-input-number>
    </div>
</template>

<script>
    export default {
      name: "input_number",
      props:{
        score: {
          required: true,
          type: Number,
          default:0
        },
        scoreChange:Function,
      },
    }
</script>

<style scoped>

</style>
