<template>
  <div>
     <hello-world :person="p"></hello-world>
  </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: "HelloWorld3",
  props: {
    person: Object
  },
  data () {
    return {
      p: this.person
    }
  },
  components: {
    HelloWorld
  }
};
</script>