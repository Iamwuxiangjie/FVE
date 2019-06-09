<template>
  <Row>
    <Col span="24">
      <Button @click="test">{{date}}</Button>
    </Col>
    <Col span="24">
      <div id="container" style="hight:400px">
        <div id="detail"></div>
        <div id="master" style="position:absolute;top:300px;height:100px;width:100%"></div>
      </div>
    </Col>

  </Row>

</template>

<script>
  import Highcharts from 'highcharts'
  import DateUtils from '../mixins/DateUtils.vue'
  import ChartsUtils from '../mixins/ChartsUtils.vue'

  export default {
    mixins:[DateUtils,ChartsUtils],
    name: "mixed-charts",
    data(){
      return {
        dataList:[],
        charts:{
          fields:[
            {
              key:'aPrice',
              name:'A价格',
              type:'column',
              valueSuffix:'元',
              visible:true,
            },
            {
              key:'bPrice',
              name:'B价格',
              type:'column',
              valueSuffix:'元',
              visible:true,
            },
            {
              key:'cPrice',
              name:'C价格',
              type:'spline',
              valueSuffix:'元',
              visible:true,
            }],
          detailCharts:{},
        },
        date:'123'
      }
    },

    methods:{
      init(){
        this.dataList=[];
        let past=this.addByNow(-100)
        let now=new Date();
        while(past.getTime()<now.getTime()){
          this.dataList.push({
            date:this.dateFormat(past),
            aPrice:Math.random().toFixed(3)*1000,
            bPrice:Math.random().toFixed(3)*1000,
            cPrice:Math.random().toFixed(3)*1000,
          })
          past=this.add(past,1);
        }
      },
      test(){
        this.date=Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',new Date().getTime(),false);
      }
    },

    mounted(){
        this.init();
        this.initCharts(this.dataList,this.charts.fields);
    },
  }
</script>
<style scoped>

</style>


