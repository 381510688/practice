<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->

    <child-emit 
      :initialValue="initialValue"
      @update-value-by-child="updateParentValue">
    </child-emit>
  </div>
</template>
<script>
import childEmit from './components/child-emit.vue'
import ElementUI from 'element-ui'
export default {
  data () {
    return {
      initialValue: {dog: 1, cat: 2}
    }
  },
  components: {
    childEmit
  },
  methods: {
     updateParentValue(newValue) {
      console.log("new value", newValue)
           this.valueEmit = newValue;

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
