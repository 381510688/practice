<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
