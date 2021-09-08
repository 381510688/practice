<template>
  <div>
    <parent>
      <child></child>
    </parent>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import Parent from './components/Parent.vue'


export default {
  name: 'App',
  components: {
    Child,
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
