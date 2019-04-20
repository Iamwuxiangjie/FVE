<template>
  <div>
    <!--<h1 v-show="true">LOGIN:{{user.name | filter}}</h1>
    <label>name:</label>
    <el-input v-model="user.name" placeholder="请输入用户名"/>
    <div v-if="user.name==''" style="color:red">
      用户名长度不能为0
    </div>
    <el-button @click="showName">submit</el-button>
    <ul>
      <template v-for="item in list">
        <li>{{item.name}}:{{item.id}}</li>
      </template>
    </ul>
    <div @[eventtype]="eventtest">
      event
    </div>
    {{JSON.stringify(testList)}}
    {{JSON.stringify(user.name)}}
    <template v-for="(item,index) in testList[1]">
        <el-input-number v-model="testList[1][index].fz" :step="0.5" :min="0.5" :max="999"></el-input-number>
    </template>
    <el-button @click="eventtest">submit</el-button>
    -->
  <el-container style="background: aqua">
    <el-header style="background: greenyellow">
      123
    </el-header>

    <el-main style="background: saddlebrown">
      456
    </el-main>

    <el-footer style="background: sandybrown">
      789
    </el-footer>
  </el-container>
  </div>
</template>

<script>

    export default {
        name: "login.vue",
        data() {
          return {
            user:{
              name: ''
            },
            list:[
              {id:1,name:'jf'},
              {id:2,name:'cm'},
            ],
            eventtype:'',
            testList:[],
          }
        },
        methods:{
          init:function () {
            this.testList=[];

          },
          showName:function(){
            debugger;
            var d=this.$root.name;
            this.eventtype=this.user.name;
          },
          eventtest:function(){
            /*this.testList=[];
            this.testList.push([1]);
            this.testList.push([2]);*/
            var data=[{id:1,fz:2,lx:1},{id:2,fz:3,lx:3},{id:3,fz:1,lx:4}];
            this.testList=[];
            for(var i=0;i<7;i++){
              this.testList.push([]);
            }
            for(var index in data){
              var d=data[index];
              this.testList[d.lx].push(d);
            }
            console.log(this.testList);
            this.user.name='123';
          }
        },
        created:function () {
          this.init();
        },
        filters:{
          filter:function(val){
            if(val){
              return val.charAt(0).toUpperCase() + val.slice(1);
            }
          }
        }
    }
</script>

<style scoped>

</style>
