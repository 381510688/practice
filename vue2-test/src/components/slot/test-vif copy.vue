<template>
  <div>
    <p>测试slot根元素被v-if时</p>
    <div v-if="isShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test-vif',
  computed: {
    isShow () {
      return !!this.$slots.content
    }
  },
  created () {
    console.log(this.$slots.content)
  }
}
</script>
