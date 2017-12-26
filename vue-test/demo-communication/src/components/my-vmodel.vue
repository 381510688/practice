<template>
  <div>
    <p>my-vmodel</p>
    <label for="name">姓名</label><input type="text" id="name" v-model="value.name">
    <label for="age">年龄</label><input type="text" id="age" v-model="value.age">
  </div>
</template>

<script>
  export default {
    name: 'my-vmodel',
    props: {
      value: {
        type: Object,
        default: function() {
          return {
            name: '',
            age: ''
          }
        }
      }
    },
    watch: {
      value(newVal) {
        console.log('my-vmodel', newVal)
//            this.$emit('input', newVal)
      }
    }
  }
</script>
