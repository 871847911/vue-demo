<template>
  <div class="demo">
    <h1 class="red">{{ msg }}</h1>
    <p>{{data}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'demo',
      data:'1222'
    }
  },
  beforeMount: function () {
    this.msg = this.$route.params.data || this.msg;
  },  
  mounted: function () {
		this.$http.get("https://cnodejs.org/api/v1/topics",{ params:{page : '1',tab : 'job',limit : '4',mdrender : 'false'}},{emulateJSON:true}).then(
            function (res) {
            	console.log(res.body)
            	this.data = res.body.data[0].tab
            },function (res) {
            // 处理失败的结果
            }
    );
    console.log(this.$jquery('h1').eq(0).html())    
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
	color:blue;
}
</style>