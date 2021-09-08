<template>
  <div class="parent" @click="clickCtn">
    <slot></slot>
    <p>点击次数：{{count}}</p>
  </div>
</template>
<script>
export default {
  name: 'Parent',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    clickCtn () {
      this.count++
    }
  }
}
</script>