<template>
  <div class="demo8">
    <p>{{ count }}</p>
    <p v-on:click="change">改变store</p>
    <p v-on:click="change11">action</p>  
    <p>{{ count2 }}</p>
    <p v-on:click="change2">改变store</p>    
  </div>
</template>

<script>
export default {
  name: 'demo8',
  computed: {
    count () {
      return this.$store.state.a.count
    },
    count2 () {
      return this.$store.state.b.count
    }    
  },
  beforeMount: function () {

  },  
  mounted: function () {

  },
  methods: {
    change() {
      console.log(this.$store.state)
      console.log(this.$store._mutations)
      this.$store.commit('increment','zzc')    
    },
    change11() {
      this.$store.dispatch('increment')    
    },
    change2() {
      this.$store.commit('increment2')    
    }    
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>