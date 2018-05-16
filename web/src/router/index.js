import Vue from 'vue'
import Router from 'vue-router'

import es6 from '@/router/es6.js'
import vue from '@/router/vue.js'
import echarts from '@/router/echarts.js'

import App from '@/App.vue'
import index from '@/views/index'

import login from '@/views/login/login.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },  {
    path: '/',
    component: App,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: index
      },
      // es6,
      vue,
      echarts
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
export {routes}