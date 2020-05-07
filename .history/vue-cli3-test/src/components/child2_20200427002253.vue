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
  watch: {
    initialValue: {
      handler (val, oldVal) {
        if (val) {
          
        }
      }
    }
  }
  // computed: {
  //   valueEmit () {
  //     return Object.assign({}, this.initialValue)
  //   }
  }
}
</script>