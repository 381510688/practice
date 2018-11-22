<template>
  <div>
    <p>hello component</p>
    <button @click="getName">获取name</button>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    props: ['name'],
    data () {
      return {

      }
    },
    methods: {
      getName () {
        // eslint-disable-next-line
        console.log(this.name)
      }
    }
  }
</script>