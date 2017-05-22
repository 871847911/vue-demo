<template>
	<div class="demo6">
		<vue-nav :cur="cur" :all="all" :callback="callback" :back="back" :next="next"></vue-nav>
		<p>{{data}}</p>
	</div>
</template>

<script>
import Vnav from '@/components/Page'
export default {
	name: 'demo6',
	data() {
		return {
	        cur: 1,
	        all: 100,
	        data:'测试'
		}
	},
	components: {
		'vue-nav': Vnav
	},
	mounted() {

	},
	methods: {
        callback(data) {
          	this.cur = data;
			this.$http.get("https://cnodejs.org/api/v1/topics",{ params:{page : this.cur,tab : 'job',limit : '4',mdrender : 'false'}},{emulateJSON:true}).then(
	            function (res) {
	            	//console.log(res.body)
	            	this.data = res.body.data[0].title
	            },function (res) {
	            // 处理失败的结果
	            }
	    	);          
       },
       back() {
          	this.cur = this.cur-1;
			this.$http.get("https://cnodejs.org/api/v1/topics",{ params:{page : this.cur,tab : 'job',limit : '4',mdrender : 'false'}},{emulateJSON:true}).then(
	            function (res) {
	            	//console.log(res.body)
	            	this.data = res.body.data[0].title
	            },function (res) {
	            // 处理失败的结果
	            }
	    	);       		
      },
      next() {
          	this.cur = this.cur+1;
			this.$http.get("https://cnodejs.org/api/v1/topics",{ params:{page : this.cur,tab : 'job',limit : '4',mdrender : 'false'}},{emulateJSON:true}).then(
	            function (res) {
	            	//console.log(res.body)
	            	this.data = res.body.data[0].title
	            },function (res) {
	            // 处理失败的结果
	            }
	    	);      	
      }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>