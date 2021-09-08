<template>
  <div class="parent" @click="clickCtn">
    <slot></slot>
    <p>点击次数：{{count}}</p>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Parent',
  setup () {
    const count = ref(0)
    const clickCtn = function () {
      count.value++
    }
    return {
      count,
      clickCtn
    }
  }
}
</script>