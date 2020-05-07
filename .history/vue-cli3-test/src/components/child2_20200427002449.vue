<template>
  <div class="child-container">
    <p> 
      <label for="cat">猫🐱：</label>
      <input id="cat" type="text" v-model="valueEmit.cat" />
    </p>
    <p>
      <label for="dog">狗🐶：</label>
      <input id="dog" type="text" v-model="valueEmit.dog" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    initialValue: Object
  },
  data () {
    return {
      valueEmit: Object.assign({}, this.initialValue)
    }
  },
  // watch: {
  //   initialValue: {
  //     handler (val, oldVal) {
  //       if (val) {
  //         this.valueEmit = Object.assign({}, this.initialValue)
  //       }
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // }
  // computed: {
  //   valueEmit () {
  //     return Object.assign({}, this.initialValue)
  //   }
  }
}
</script>