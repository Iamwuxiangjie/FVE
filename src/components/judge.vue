<template>
<div>
  <div style="width:980px;" ref="mparent">


    {{score}}
    <plugin_input_number :score="score" :scoreChange="scoreChange">
      <template slot-scope="scope">
       {{scope}}
      </template>
      <el-button slot="test">test</el-button>
    </plugin_input_number>

    <el-button @click="debuggerMethod()">debugger</el-button>
    <div class="red">
      datetime:{{datetime}}
    </div>
  </div>
</div>
</template>

<script>
  import '@/components/css/judge.css'

  import $COMMON_METHODS from '@/components/js/common.js'
  import {dateFormat} from '@/components/js/test.js'

  import input_number from '@/components/plugin/input_number'

  export default {
    name: "judge",

    provide: function () {
      return {
        getScore: this.score,
      }
    },

    data() {
      return {
        name: 'judge',
        data_of_plugin_input_number: {},
        datetime: '',
        score: 2,
      }
    },
    methods: {
      init: function () {
        //this.data_of_plugin_input_number=this.$refs.plugin_input_number.$data;
        //this.$data.
      },
      debuggerMethod: function () {
        this.datetime = dateFormat(this.datetime);//$COMMON_METHODS.dateFormat(this.datetime);
      },
      scoreChange: function (val) {
        this.score = val;
      }
    },
    components: {
      plugin_input_number: input_number,
    },
    mounted: function () {
      this.init();
    },
  }
</script>

<style scoped>

</style>
