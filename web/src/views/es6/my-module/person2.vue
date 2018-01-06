<template>
  <div>
    MODULE
    <p>{{name}}</p>
  </div>
</template>

<script>
  import {name} from './person.js'

  export default {
    data() {
      return {
        name: name
      }
    }
  }


</script>
