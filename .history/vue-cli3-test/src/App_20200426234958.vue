<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->

  
  </div>
</template>
<script>
import childEmit from './components/child-emit.vue'
import ElementUI from 'element-ui'
export default {
  data () {
    return {
      
    }
  },
  components: {
    childEmit
  },
  created () {
    console.log('xxx', ElementUI.Message === this.$message)
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
