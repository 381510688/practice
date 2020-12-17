<template>
  <div class="count-container">
    <div>当前值： {{count}}</div>
    <button @click="add">+1</button>
  </div>
</template>
<script>
import { ref, toRef, toRefs, isRef, computed, isReactive, watchEffect, watch } from 'vue'
export default {
  name: "Count",
  props: {
    initial: Number
  },
  setup (props) {
    console.log(props)
    console.log(isRef(props), isReactive(props))
    console.log(isRef(props.initial), isReactive(props.initial))
    // 方式一[无法实现]：computed 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
    // const count = computed(() => props.initial)
   
    
    // 方式二：watchEffect 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    // const count = ref(null)
    // watchEffect(() => {
    //   count.value = props.initial
    // })

    // 方式三：watch 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    // watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types
    // https://github.com/vuejs/rfcs/pull/125#issuecomment-592288476
    // const count = ref(null)
    // watch(() => props.initial, (initial, prvInitial) => {
    //   count.value = initial
    // }, {immediate: true})
    
    // const count = ref(null)
    // watch(toRef(props, 'initial'), (initial, prvInitial) => {
    //   count.value = initial
    // }, {immediate: true})

    const count = ref(null)
    const {initial} = toRefs(props)
    watch(initial, (initial, prvInitial) => {
      count.value = initial
    }, {immediate: true})

    function add () {
      count.value++
    }

    return {
      count,
      add
    }
  }
};
</script>
<style>
 .count-container div {
    display: inline-block;
    margin-right: 16px;
  }
</style>