<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>A === A1：{{A === A1}}</div>
    <div>A1 === A2：{{A1 === A2}}</div>
    <div>A2 === A3：{{A2 === A3}}</div>
    <div>A3 === A4：{{A3 === A4}}</div>

    <div>A.a === A1.a：{{A.a === A1.a}}</div>
    <div>A1.a === A2.a：{{A1.a === A2.a}}</div>
    <div>A2.a === A3.a：{{A2.a === A3.a}}</div>
    <div>A3.a === A4.a：{{A3.a === A4.a}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import A1 from './es-module/a.js'
import A2 from './es-module/a.js'

import A3 from './es-module/b.js'
import A4 from './es-module/b.js'

export default {
  name: 'home',
  data () {
    return {
      A: window.A,
      A1: A1,
      A2: A2,
      A3: A3,
      A4: A4
    }
  },
  components: {
    HelloWorld
  }
}
</script>
