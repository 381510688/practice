<template>
  <div>Look at the console</div>
</template>

<script>
export default {
  name: 'test-prop-default',
  props: {
    param1: String,
    param2: Number,
    param3: Boolean,
    param4: Array,
    param5: Object,
    param6: Date,
    param7: Function,
    param8: Symbol
  },
  mounted () {
    console.table([
      ["String", typeof this.param1, this.param1],
      ["Number", typeof this.param2, this.param2],
      ["Boolean", typeof this.param3, this.param3],
      ["Array", typeof this.param4, this.param4],
      ["Object", typeof this.param5, this.param5],
      ["Date", typeof this.param6, this.param6],
      ["Function", typeof this.param7, this.param7],
      ["Symbol", typeof this.param8, this.param8],
    ])
  }
}
</script>