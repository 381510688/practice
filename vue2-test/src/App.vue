<template>
  <div id="app">
    <!-- <hello-world ref="HelloWorldRef" @hook:created="helloWorldCreated" :msg="message"></hello-world>
    <input type="text" v-model="message" />
    <test-prop-default></test-prop-default>
    <test-boolean-prop :param1="param1" :param3="param3" :param4="param4" :testParam="testParam"></test-boolean-prop>
    <test-prop :testParam="testParam"></test-prop> -->
    <input v-model="a.a" />
    <button @click="btnClick">xxx</button>
    <parent>
      <child></child>
    </parent>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TestPropDefault from './components/TestPropDefault.vue'
// import TestBooleanProp from './components/TestBooleanProp.vue'
// import TestProp from './components/TestProp.vue'

import Parent from './components/Parent.vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TestProp,
    // TestPropDefault,
    // TestBooleanProp,
    Parent,
    Child
  },
  data () {
    return {
      a: {
        a: ''
      },
      message: '',
      param1: '',
      param3: '',
      param4: 'param4',
      testParam: 'test-param'
    }
  },
  methods: {
    // https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L336

    // vue3：https://github.com/vuejs/vue-next/issues/25
    helloWorldCreated () {
      console.log(`HelloWorld's created called by hook:created!`)
    },
    btnClick () {
      var a = this.a.a
      console.log(a)
    }
  },
  mounted () {
    // const HelloWorldVmOption = this.$refs['HelloWorldRef'].$options
    // if (!HelloWorldVmOption['updated']) HelloWorldVmOption['updated'] = []
    // HelloWorldVmOption['updated'].push(() => {
    //   console.log(`HelloWorld's created called by HelloWorldRef.$options!`)
    // })
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
