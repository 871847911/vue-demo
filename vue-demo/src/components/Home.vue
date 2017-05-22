<template>
  <div class="home">
  	<img src="../../static/logo/logo.png">
    <h1 class="red">{{ msg }}</h1>
    <p>{{ reversedName }}</p>
    <p>{{ name | capitalize }}</p>
    <p v-on:click="getDom">点击获取dom</p>
    <p v-on:click="show">show</p>
    <p v-on:click="dis">销毁</p>
    <p class="zzc">看不到</p>
   	<br />
   	<router-link :to="{ name: 'Demo', params: { data : msg}}">路由传参</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      name :'zzc'
    }
  },
  computed: {
    // a computed getter
    reversedName: function () {
      // `this` points to the vm instance
      return this.name.split('')[0]
    }
  },		  
  beforeCreate: function () {
	console.log('beforeCreate 的name: ' + this.name)
  },			  
  created: function () {
    // `this` 指向 vm 实例			  	
    console.log('created 的name: ' + this.name)
  },
  beforeMount: function () {
    console.log('beforeMount的name:'+ this.name)
  },			  
  mounted: function () {
    console.log('mounted的name:' + this.name)
  },
  beforeUpdate: function () {
    console.log('beforeUpdate的name:'+ this.name)
  },
  updated: function () {
    console.log('updated的name:'+ this.name)
  },
  beforeDestory: function () {
    console.log('beforeDestory的name:'+ this.name)
  },
  destoryed: function () {
    console.log('destoryed的name:'+ this.name)
  },
  //自定义数据过滤器
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  //定义的一些方法
  methods: {
    getDom: function (event) {
      // `this` 在方法里指当前 Vue 实例
      //alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      console.log(event.target)
      console.log(event.target.tagName)
      console.log(this)
      //console.log(this.$destroy)
    },
    show: function(){
    	this.name = 'ccc';
    },
    dis :function(){
    	console.log(this.$destroy)
    	this.$destroy();
    }
    
  },
  //监视name属性变化时调用
  watch: {
    name: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }			  	
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  	@import "../style/reset.css";
</style>