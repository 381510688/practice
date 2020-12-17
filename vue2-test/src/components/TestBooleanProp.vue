<template>
  <div>Look at the console</div>
</template>

<script>
export default {
  name: 'test-boolean-prop',
  props: {
    param1: Boolean,
    param2: Boolean,
    param3: [String, Boolean],
    param4: [Object, Boolean],
    param5: [Function, Boolean],
    testParam: [Object, Boolean]
  },
  mounted () {
    console.log("Boolean", typeof this.param1, this.param1)
    console.log("Boolean", typeof this.param2, this.param2)
    console.log("[String, Boolean]", typeof this.param3, this.param3)
    console.log("[Object, Boolean]", typeof this.param4, this.param4)
    console.log("[Function, Boolean]", typeof this.param5, this.param5)
    console.log("[Object, Boolean]", typeof this.testParam, this.param5)
  }
}
</script>