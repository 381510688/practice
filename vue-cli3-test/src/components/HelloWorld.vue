<docs>ligang</docs>
<template>
  <div>
    <div>{{$options._componentTag}}</div>
    <div>Hello {{person.name}}</div>
    <div>Updated次数：{{count}}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    person: Object
  },
  data() {
    return {
      count: 0
    };
  },
  watch: {
    person: {
      handler () {
        this.count++
      },
      immediate: true
    }
  },
  mounted () {
    // console.log(1111111, this.$slots.default)
  },
  updated() {
    // this.count++;
    // console.log('hello world updated')
  }
};
</script>