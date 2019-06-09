<template>
  <div>
    <div id="container">

    </div>
  </div>

</template>

<script>
  import Highcharts from 'highcharts'
  import DateUtils from '../mixins/DateUtils.vue'

  export default {
    mixins:[DateUtils],
    name: "mixed-charts",
    data(){
      return {
        dataList:[],
      }
    },

    methods:{
      init(){
        let past=this.addByNow(-7)
        let now=new Date();
        while(past.getTime()<now.getTime()){
          this.dataList.push({
            date:this.dateFormat(past),
            aPrice:Math.pow(Math.round(Math.random()),2),
            bPrice:Math.pow(Math.round(Math.random()),2),
            cPrice:Math.pow(Math.round(Math.random()),2),
          })
          past=this.add(past,1);
        }
      },


      initCharts(){
        let categories=this.dataList.map(i=>i.date);
        const series=[];
        const yAxis=[];
        let fields=[
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
        }];



        fields.forEach((d, index) => {
          series.push({
            name: d.name,
            type: d.type,
            data: this.dataList.map(i => i[d.key]),
            yAxis: index,
            tooltip: {
              valueSuffix: d.valueSuffix
            },
            visible:d.visible,
          })

          yAxis.push({ // Primary yAxis
            tickWidth:0,//去掉刻度
            gridLineWidth: 0,//去掉y轴方向的横线
            labels: {
              format: '{value}',
              style: {
                color: Highcharts.getOptions().colors[0]
              },
              enabled: false//去掉刻度数字
            },
            title: {
              text: undefined,
              style: {
                color: Highcharts.getOptions().colors[1]
              }
            },
            opposite: d.type === 'column'
          })
        })

        this.$nextTick(() => {
          let chart = Highcharts.chart(this.$el.querySelector("#container"), {
            chart: {
              zoomType: 'xy'
            },
            credits: {
              enabled: false
            },
            title: {
              text: '价格分析',
              align:'left'
            },
            xAxis: [{
              categories: categories,
              crosshair: true
            }],
            yAxis: yAxis,
            tooltip: {
              shared: true
            },
            legend: {
              layout: 'horizontal',
              align: 'right',
              verticalAlign: 'top',
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: series
          });
        });
      },

    },

    mounted(){
      this.init();
      this.initCharts();

    },
  }
</script>
<style scoped>

</style>


