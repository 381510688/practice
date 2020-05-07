<template>
  <div class="child-emit">
    <p> Value cat: 
      <input type="text"
          @input="$emit('update-value-by-child', valueEmit)"
          v-model="valueEmit.cat">
    </p>
    <p>
      <label for="">Value dog</label>
      <input type="text" v-model="valueEmit.dog">
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