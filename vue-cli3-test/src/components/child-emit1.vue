<template>
  <div class="child-emit">
    <p> 
      <label for="cat">猫🐱：</label>
      <input id="cat" type="text" v-model="initialValue.cat"/>
    </p>
    <p>
      <label for="dog">狗🐶：</label>
      <input id="dog" type="text" v-model="initialValue.dog" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'child-emit',
  props: {
    initialValue: Object
  }
}
</script>