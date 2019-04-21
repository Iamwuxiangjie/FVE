<template>
    <div>
      <el-input-number :step="1" :min="0" :max="100" v-model="score"></el-input-number>
      <el-button @click="cdebuggerMethod">cdebugger</el-button>
    </div>
</template>

<script>
    export default {
      name: "input_number",
      data() {
        return {
          score:0,
        }
      },
      methods:{
        cdebuggerMethod:function () {
          debugger;
        }
      }
    }
</script>

<style scoped>

</style>
