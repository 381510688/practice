<template>
  <div id="app">
    

    <!-- txt{{docs}} -->

    <!-- <system-media></system-media> -->
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->

    <!-- <child
      :initialValue="valueEmit"
      @update-value-by-child="updateParentValue">
    </child>
    <input type="text" v-model="valueEmit.dog" />
    -->

    <!-- <hello-world :person="{name: 'ligang'}">
      <template></template>
    </hello-world>
    <hello-world2 :person="p"></hello-world2> -->
     <!-- <hello-world3 :person="{name: 'ligang'}"></hello-world3> -->
    <!-- <input type="text" v-model="test" placeholder="请输入">

    <button @click="setProp">动态设置属性</button>
    {{obj}} -->
  </div>


</template>
<script>
// import child from './components/child2.vue'
// import ElementUI from 'element-ui'
import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld2 from './components/HelloWorld2.vue'
// import HelloWorld3 from './components/HelloWorld3.vue'
import SystemMedia from './components/SystemMedia.vue'

// import {compile} from 'vue-template-compiler'
export default {
  data () {
    return {
      // valueEmit: {dog: 1, cat: 2}
      p: {name: 'ligang'},
      obj: {},
      test: '',
      // docs: HelloWorld.__docs
    }
  },
  components: {
    // child
    HelloWorld,
    // HelloWorld2,
    // HelloWorld3,
    SystemMedia
  },
  methods: {
    setProp() {
      this.$set(this.obj, Date.now(), 1)
    }
    // updateParentValue(newValue) {
    //   this.valueEmit = newValue
    // }
  },
  created () {
    // console.log('xxx', ElementUI.Message === this.$message)
  },
  mounted () {
    // console.log(compile(`<hello-world :person="{name: 'ligang'}"></hello-world>`))
    // console.log(compile(`<hello-world2 :person="p"></hello-world2>`))
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
