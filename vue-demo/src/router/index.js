import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import VueResource from 'vue-resource'
Vue.use(VueResource);

import jquery from 'jquery'	
Vue.prototype.$jquery = jquery 

import Velocity from 'velocity-animate'	
Vue.prototype.$Velocity = Velocity

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

import Home from '@/components/Home'
import Demo from '@/components/Demo'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Demo4'
import Demo5 from '@/components/Demo5'
import Demo6 from '@/components/Demo6'
import Demo7 from '@/components/Demo7'
import Demo8 from '@/components/Vuex'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'Demo4',
      component: Demo4
    },
    {
      path: '/demo5',
      name: 'Demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'Demo6',
      component: Demo6
    },
    {
      path: '/demo7',
      name: 'Demo7',
      component: Demo7
    },
    {
      path: '/demo8',
      name: 'Demo8',
      component: Demo8
    }         
  ]
})
