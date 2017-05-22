<template>
  <div class="demo4">
		<slider animation="normal" interval="3000" v-bind:control-btn="controlBtn" v-bind:indicators="indicators">
		  <slider-item v-for="(i, index) in list" :key="index">
		      <img v-bind:src="i" v-on:click="way">
		  </slider-item>
		</slider>	
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'demo4',
  data () {
    return {
      list: ['/static/slider/1.jpg','/static/slider/2.jpg','/static/slider/3.jpg'],
      controlBtn :false,
      indicators : false
    }
  },
	components: {
    Slider,
    SliderItem
	},
  mounted() {
  	this.way()
  },
  methods: {
		way() {
			console.log(1)
		}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>