<template>
  <div class="app">
    初始值：<input v-model.number="initial"/>
    <count :initial="initial"></count>
    <system-media @hook:created="systemCreatedCall" @onMounted="systemCreatedCall"></system-media>
  </div>
</template>

<script>
import { ref } from 'vue'
import Count from "./src/components/Count.vue";
import SystemMedia from "./src/components/SystemMedia.vue";

// import Count2 from "./src/components/Count2.vue";

export default {
  name: "App",
  components: {
    Count,
    SystemMedia
  },
  setup() {
    return {
      initial: 1,
      systemCreatedCall() {
        console.log('systemCreatedCall')
      }
    }
  }
};
</script>
<style scoped>
.app {
  text-align: letf;
  width: 500px;
  margin-top: 30px;
  margin-left: 45%;
}
</style>