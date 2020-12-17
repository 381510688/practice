<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created () {
    console.log('HelloWorld inner created!')
  },
  mounted () {
    console.log('HelloWorld inner mounted!')
  }
}
</script>