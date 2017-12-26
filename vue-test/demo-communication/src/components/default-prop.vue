<template>
  <div>
    <span>{{data.name}} -- {{data.age}}</span>
  </div>
</template>

<script>
  export default {
    name: 'default-prop',
    props: {
      data: {
        type: Object,
        default: function() {
          console.log('default')
          return {
            name: '',
            age: 18
          }
        }
      }
    }
  }
</script>
