<template>
  <div>
    <hello-world :person="{name: 'ligang'}"></hello-world>
    <hello-world2 :person="p"></hello-world2>
    <input type="text" v-model="test" placeholder="请输入" />
  </div>
</template>

<script>
import HelloWorld from "./src/components/HelloWorld.vue";
import HelloWorld2 from "./src/components/HelloWorld2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2
  },
  data() {
    return {
      p: { name: "ligang" },
      test: ""
    };
  }
};
</script>