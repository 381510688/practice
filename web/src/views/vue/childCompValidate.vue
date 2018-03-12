<template>
    <div>
        <A ref="a"></A>
        <el-button @click="save">保存</el-button>
    </div>
</template>

<script>
  import A from './a.vue'
  import B from './b.vue'

  export default {
    name: 'child-component-validate',
    data() {
      return {}
    },
    methods: {
       save() {
        console.log( this.$refs['a'].validateForm())
      }
    },
    components: {
      A
    }
  }
</script>
