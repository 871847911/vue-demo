<template>
  <div class="demo2">
    <h1>{{ msg }}</h1>  
    <ul>
			  <li v-for="(item, index) in data" v-bind:class="{ active: index===0 }">{{item}}</li>    	
    </ul>  
    
    <button  v-on:click="dong">donghua</button>
    <p>12112134</p>
  </div>
</template>

<script>
	
	export default {
	  name: 'demo2',
	  data () {
	    return {
	      msg: 'demo2',
	      data: [1,2,3,4,5],
	      show: true
	    }
	  },
	  mounted: function () {
	    console.log(this.$jquery('h1')[0])    
	  },	  
		methods: {
			dong : function(){
				this.$jquery('p').eq(0).animate({
			    marginLeft:'100px'
			  }, 1000)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.active{
		color:red;
	}
</style>