import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
// import { Message as m } from 'element-ui/packages/message/index.js'

Vue.config.productionTip = false

// console.log(ElementUI.Message)
// console.log(Message)
// console.log('Message === ElementUI.Message', Message === ElementUI.Message)

Vue.use(ElementUI)

// console.log('Vue.prototype.$message === Message', Vue.prototype.$message === Message)
// console.log('Vue.prototype.$message === ElementUI.Message', Vue.prototype.$message === ElementUI.Message)
// console.log(Message === m)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
