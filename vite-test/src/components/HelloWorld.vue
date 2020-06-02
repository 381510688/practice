<template>
  <div>
    <div>{{$options._componentTag}}</div>
    <div>Hello {{person.name}}</div>
    <div>Updated次数：{{count}}</div>
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
      handler (val, oldVal) {
        this.count++
      },
      immediate: true
    }
  },
  updated() {
    // this.count++;
    console.log(1)
  }
};
</script>