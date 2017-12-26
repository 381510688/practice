<template>
  <div>
    <p>my-vmodel</p>
    <label for="address">姓名</label><input type="text" id="address" v-model="tempAddress">
  </div>
</template>

<script>
  export default {
    name: 'my-vmodel',
    props: ['value'],
    data() {
      return {
        tempAddress: this.value
      }
    },
    watch: {
      tempAddress(newVal) {
        // 必须是input
        this.$emit('input', newVal)
      }
    }
  }
</script>
