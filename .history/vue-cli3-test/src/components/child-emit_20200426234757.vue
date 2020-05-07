<template>
  <div class="child-emit">
    <p> 
      <label for="cat"></label>
      <input id="cat"type="text"
          @input="$emit('update-value-by-child', valueEmit)"
          v-model="valueEmit.cat">
    </p>
    <p>
      <label for="dog">Value dog</label>
      <input id="dog" type="text" v-model="valueEmit.dog">
    </p>
       

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