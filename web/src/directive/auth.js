/**
 * Created by ligang on 2018/5/15.
 */
import Vue from 'vue'

Vue.directive('auth', {
  // bind(el, binding, vnode) {
  //   let {value} = binding
  //   if(value) {
  //     Vue.nextTick(() => {
  //       el.parentNode.removeChild(el)
  //     }, 0)
  //   }
  // }
  inserted(el, binding, vnode) {
    let {value} = binding
    if(value) {
      el.parentNode.removeChild(el)
    }
  }
})