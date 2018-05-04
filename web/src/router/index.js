import Vue from 'vue'
import Router from 'vue-router'

import es6 from '@/router/es6.js'
import vue from '@/router/vue.js'
import echarts from '@/router/echarts.js'

import index from '@/views/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  es6,
  vue,
  echarts
]

export default new Router({
  mode: 'history',
  routes
})
