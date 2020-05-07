<template>
  <div class="child-emit">
    
    Value cat: <input type="text"
          @input="$emit('update-value-by-child', valueEmit)"
          v-model="valueEmit.cat">
    Value dog:<input type="text"
          v-model="valueEmit.dog">    

  </div>
</template>

<script>
export default {
  ...
  props: {
    initialValue: Object
  },
  data() {
    return {
      valueEmit: Object.assign({}, this.initialValue)
    };
  }
};
</script>