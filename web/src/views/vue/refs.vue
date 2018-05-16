<template>
  <div>
    <h2>Vue</h2>
    <div v-for="(item, index) in list" :key="index">
      <A ref="a" v-if="item.name === 'a'">1</A>
      <B ref="b" v-if="item.name === 'b'">2</B>
      <C ref="c" v-if="item.name === 'c'">3</C>
    </div>
    <button @click="getRefs">获取</button>


    <iframe src="http://localhost:9090/vue/ie" frameborder="0" name="myframe"></iframe>
  </div>
</template>

<script>
  import A from './a.vue'
  import B from './b.vue'
  import C from './c.vue'

  export default {
    name: 'refs',
    data() {
      return {
        list: [{
          name: 'a'
        },{
          name: 'b'
        },{
          name: 'c'
        }]
      }
    },
    methods: {
      getRefs() {
        console.log(this.$refs)
      }
    },
    components: {
      A,
      B,
      C
    },
    mounted() {
      window.bigViewIsShow = true
      window.name = 'xxx'
      window.fullClose = function() {
        console.log('fullClose')
      }
    }
  }
</script>
