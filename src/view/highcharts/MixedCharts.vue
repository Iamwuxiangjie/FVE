<template>
  <div>
    <div id="container">
      <div id="detail"></div>
      <div id="master" style="position:absolute;top:300px;height:100px;width:100%"></div>
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
        }
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
        const masterSeries=[];

        const yAxis=[];
        let fields=this.charts.fields;
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

        masterSeries.push({
          type: 'area',
          name: fields[0].name,
          pointInterval: 24 * 3600 * 1000,
          pointStart: this.dateParse(categories[0]).getTime(),
          data: this.dataList.map(i => i[fields[0].key])
        })

        const from=this.dateParse(categories[0]).getTime();
        const to=this.dateParse(categories[categories.length-1]).getTime();
        this.$nextTick(() => {
            let masterData=Array.from(this.dataList);
            let detailData=[]

            const master=this.$el.querySelector("#master");
            const detail=this.$el.querySelector("#detail");

            let masterCharts;
            let detailCharts;

            const initDetailCharts=()=>{
              detailCharts = Highcharts.chart(detail, {
              chart: {
                zoomType: 'xy',
                marginBottom: 120,
                reflow: false,
                marginLeft: 50,
                marginRight: 20,
                style: {
                  position: 'absolute'
                }
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
            }
            const initMasterCharts=()=>{
              masterCharts=Highcharts.chart(master, {
                chart: {
                  reflow: false,
                  borderWidth: 0,
                  backgroundColor: null,
                  marginLeft: 50,
                  marginRight: 20,
                  zoomType: 'x',
                  events: {
                    selection: function (event) {
                      let extremesObject = event.xAxis[0];
                      let min = extremesObject.min;
                      let max = extremesObject.max;
                      detailData = [];
                      let xAxis = this.xAxis[0];
                      // move the plot bands to reflect the new detail span
                      xAxis.removePlotBand('mask-before');
                      xAxis.addPlotBand({
                        id: 'mask-before',
                        from: from,
                        to: min,
                        color: 'rgba(0, 0, 0, 0.2)'
                      });
                      xAxis.removePlotBand('mask-after');
                      xAxis.addPlotBand({
                        id: 'mask-after',
                        from: max,
                        to: to,
                        color: 'rgba(0, 0, 0, 0.2)'
                      });
                      detailData=masterData.filter(i=>{
                        const time=new Date(i.date.replace(/-/g, '/')).getTime();
                        return time>=min&&time<=max;
                      })
                      fields.forEach((d, index) => {
                        detailCharts.series[index].setData(detailData.map(i => i[d.key]));
                      })
                      return false;
                    }
                  }
                },
                title: {
                  text: null
                },
                xAxis: {
                  type: 'datetime',
                  showLastTickLabel: true,
                  maxZoom: 2 * 24 * 3600000, // fourteen days
                  plotBands: [{
                    id: 'mask-before',
                    from: from,
                    to: to,
                    color: 'rgba(0, 0, 0, 0.2)'
                  }],
                  title: {
                    text: null
                  }
                },
                yAxis: {
                  gridLineWidth: 0,
                  labels: {
                    enabled: false
                  },
                  title: {
                    text: null
                  },
                  min: 0.6,
                  showFirstLabel: false
                },
                tooltip: {
                  formatter: function () {
                    return false;
                  }
                },
                legend: {
                  enabled: false
                },
                credits: {
                  enabled: false
                },
                plotOptions: {
                  series: {
                    fillColor: {
                      linearGradient: [0, 0, 0, 70],
                      stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, 'rgba(255,255,255,0)']
                      ]
                    },
                    lineWidth: 1,
                    marker: {
                      enabled: false
                    },
                    shadow: false,
                    states: {
                      hover: {
                        lineWidth: 1
                      }
                    },
                    enableMouseTracking: false
                  }
                },
                series: masterSeries,
                exporting: {
                  enabled: false
                }
              }, function () {
                initDetailCharts();
              });
            }
            initMasterCharts();
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


