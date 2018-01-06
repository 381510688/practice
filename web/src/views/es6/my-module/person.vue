<template>
  <div>
    MODULE
    <p>{{name}}</p>
    <button @click="setName">设置名称</button>
  </div>
</template>

<script>
  import {name, setName} from './person.js'

  export default {
    data() {
      return {
        name: name
      }
    },
    methods: {
      setName() {
        setName('lg')
      }
    }
  }
</script>
