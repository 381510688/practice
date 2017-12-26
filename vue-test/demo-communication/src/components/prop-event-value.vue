<template>
    <div>
        <p>prop-event</p>
        <label for="address">地址</label><input type="text" id="address" v-model="tempAddress">
    </div>
</template>

<script>
//  export default {
//    name: 'prop-event',
//    props: ['address'],
//    watch: {
//      address(newVal) {
//        this.$emit('update', newVal)
//      }
//    }
//  }
  export default {
    name: 'prop-event',
    props: ['address'],
    data() {
      return {
        tempAddress: this.address
      }
    },
    watch: {
      tempAddress(newVal) {
        this.$emit('update', newVal)
      }
    }
  }
</script>
