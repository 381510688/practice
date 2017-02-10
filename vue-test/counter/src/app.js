/**
 * Created by ligang on 16/12/27.
 */
// import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: h => h(Counter)
});