<template>
  <div>Hello {{state.count}}</div>
  <div>double {{state.double}}</div>
  <button @click="add">增加</button>
</template>
<script>
import { reactive, computed } from 'vue'
export default {
  name: "Count2",
  setup () {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })
    function add () {
      state.count++
    }

    return {
      state,
      add
    }
  }
};
</script>