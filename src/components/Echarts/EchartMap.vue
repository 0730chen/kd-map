<template>
    <div id="main" style="width:1000px;height:800px"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "EchartMap",
    data(){
      return{
        options:{
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    methods:{
    },
    created() {
    },
    mounted() {
      let MyChart = echarts.init(document.querySelector('#main'),null,{renderer:'svg'})
      console.log(MyChart);
      console.log(this.options)
      MyChart.setOption(this.options)
    }
  }
</script>

<style scoped>

</style>