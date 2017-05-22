<template>
  <div class="demo7-2">
		<p>{{cur}}</p>
		<p>{{all}}</p>
		<p v-on:click="btnClick()">点击事件</p>
		<p v-on:click="btnchange()">改变父组件数据</p>
  </div>
</template>

<script>
	
	export default {
	  name: 'demo7-2',
		props: {
      cur: {
        type: [String, Number],
        required: true
      },
      all: {
        type: [String],
				default: '默认'
      },
      callback: {
        default() {
          return function callback() {
            console.log('callback')
          }
        }
      },
      change: {
        default() {
          return function change() {
            console.log('change')
          }
        }
      }      
   },
	  mounted: function () {
 
	  },	  
		methods: {
			btnClick() {
				this.callback()
			},
			btnchange() {
				this.change(678)
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>