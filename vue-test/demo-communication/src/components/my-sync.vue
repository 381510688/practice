<template>
  <div>
    <p>my-sync</p>
    <label for="name">姓名</label><input type="text" id="name" v-model="user.name">
    <label for="age">年龄</label><input type="text" id="age" v-model="user.age">
  </div>
</template>

<script>
  export default {
    name: 'my-sync',
    props: {
      user: {
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
      user(newVal) {
        this.$emit('update:user', newVal)
      }
    }
  }
</script>
