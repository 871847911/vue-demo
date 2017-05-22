<template>
  <div class="demo3">
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>

var echarts = require('echarts/lib/echarts')	
export default {
  name: 'demo3',
  data () {
    return {

    }
  },
  beforeMount: function () {

  },  
  mounted: function () {
		this.drawLine(); 
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>