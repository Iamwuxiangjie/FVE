<template>
  <div style="width:980px">
    <dropdown url="www.baidu.com" method="get" text="text" :clickChange="zjChange"></dropdown>
    <dropdown text="text1" :list="zjList" :clickChange="zjChange"></dropdown>
    <ul class="breadcrumb" id="xx" style="transform:translateY(0)">
      <li><a href="#">{{`好的${$route.path}`}}</a></li>
      <li><a href="#">2013</a></li>
      <li class="active">十一月</li>
    </ul>
    <button @click="change" >change</button>
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
              text1:'请选择章节',
              id:-1,
            },
            {
              text1:'第一章',
              id:0,
            },
            {
              text1:'第二章',
              id:1,
            },
          ],
        }
      },
      methods:{
        init:function () {

        },
        change(event){
          var target =$('#xx')//$(event.target)
          /*if(target.attr('class')&&target.attr('class')=='t2'){
            target.attr('class','t1')
          }else{
            target.attr('class','t2')
          }*/
          if(target.css('display')=='block'){
            target.fadeOut('slow')
          }else{
            target.fadeIn('slow')
          }
        },

        zjChange:function(item){
          console.log(item);
          debugger;
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
  .t1 {
    display: block;
  }
  .t2{
    display: none;
  }
</style>
