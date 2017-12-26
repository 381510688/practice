<template>
  <div>
    <p>my-sync</p>
    <label for="address">地址</label><input type="text" id="address" v-model="tempAddress">
  </div>
</template>

<script>
  export default {
    name: 'my-sync',
    props: ['address'],
    data() {
      return {
        tempAddress: this.address
      }
    },
    watch: {
      tempAddress(newVal) {
        // 必须是这个update:address
        this.$emit('update:address', newVal)
      }
    }
  }
</script>
