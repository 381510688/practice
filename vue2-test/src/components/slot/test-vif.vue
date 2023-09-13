<template>
  <div>
    <p>测试slot根元素被v-if时</p>
    <div v-if="isShow">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'test-vif',
  props: ['isShow'],
  created () {
    console.log(this.$slots.content)
  }
}
</script>
