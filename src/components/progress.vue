<template>
  <div>
    {{list}}
    <div v-for="index in 3" style="border: 2px solid red;padding:10px">
      <div v-for="(p,pi) in list[index-1]" style="border: 2px solid green;padding:10px">
        用户名:<el-input v-model="p.name" size="mini" :key="pi" style="width:200px;margin:10px"></el-input>
        <div v-for="(c,ci) in p.message" :style="{color:c.title?c.title:'#000'}" style="border: 2px solid blue;padding:10px">
          标题:<el-input v-model="c.title" size="mini" :key="ci" style="width:400px;"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "progress.vue",
    data() {
      return {
        list:[],
      }
    },
    methods:{
      init:function () {
        this.list.push([ { "name": "wxj", "message": [ { "title": "red" } ] } ])
        this.list.push([ { "name": "jf", "message": [ { "title": "blue" } ] } ])
        this.list.push([ { "name": "cm", "message": [ { "title": "green" } ] } ])
        /*this.list.push([]);
        this.list.push([]);
        this.list.push([]);
        this.list[0].push({name:'wxj',message:[]});
        this.list[0][0].message.push({title:'red'})

        this.list[1].push({name:'jf',message:[]});
        this.list[1][0].message.push({title:'blue'})

        this.list[2].push({name:'cm',message:[]});
        this.list[2][0].message.push({title:'green'})*/
        setInterval(()=>{
          const source=this.list[0].find(i=>i.name==='wxj')
          let color=source.message[0].title
          source.message[0].title=color==='red'?'blue':'red';
        },1000)

      },
    },
    created () {
      setTimeout(this.init,1000)

    },
    filters:{

    }
  }
</script>

<style scoped>

</style>
