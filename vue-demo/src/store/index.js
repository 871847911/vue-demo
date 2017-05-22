import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import jquery from 'jquery'

const moduleA = {
  state: {
    count: 0
  },
  mutations: {
    increment (state,str) {
      state.count = str
    }
  },
  actions: {
    increment (context) {
/*	   setTimeout(() => {
	      context.commit('increment')
	    }, 3000)*/
		jquery.ajax({
			type:"get",
			url:"https://cnodejs.org/api/v1/topics",
			data:{
				page : 1,
				tab : 'job',
				limit : 4,
				mdrender : 'false'
			},
			dataType:"json",
			success:function(e){
				context.commit('increment',e.data[0].tab)
				console.log(e.data[0].tab);				
			},
			error:function(){

			}
		});		    
    }
  }  
}

const moduleB = {
  state: {
    count: 100
  },
  mutations: {
    increment2 (state) {
      state.count--
    }
  }
}

var store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store
