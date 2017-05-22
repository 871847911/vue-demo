<template>
  <div class="demo7">
		<demo :cur="cur" :callback="callback" :change="change"></demo>
  </div>
</template>

<script>
import Demo from '@/components/Demo7-2'	
	export default {
	  name: 'demo7',
	  data () {
	    return {
				cur : 100,
	    }
	  },
		components: {
			'demo': Demo
		},  
	  mounted: function () {
 
	  },	  
		methods: {
        callback() {
					this.cur = 99
       },
       change(data) {
       		this.cur = data
       }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>