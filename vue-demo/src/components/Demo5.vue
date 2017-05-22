<template>
	<div class="demo5">
	  <button @click="show = !show">
	    Toggle
	  </button>
	  <transition
	    v-on:before-enter="beforeEnter"
	    v-on:enter="enter"
	    v-on:leave="leave"
	    v-bind:css="false"
	  >
	    <p v-if="show">
	      Demo
	    </p>
	  </transition>
	</div>
</template>

<script>
export default {
		name : 'demo5',
		data() {
		return {
			show: false
		}
	},
	methods: {
		beforeEnter: function(el) {
			el.style.opacity = 0
			el.style.marginTop="0px";
		},
		enter: function(el, done) {
			this.$Velocity(el, {
				opacity: 1,
				marginTop : "100px"
			}, {
				duration: 2000
			})
		},
		leave: function(el, done) {
			this.$Velocity(el, {
				opacity: 0,
				marginTop : "0px"
			}, {
				duration: 2000
			})
		}
	}
}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>