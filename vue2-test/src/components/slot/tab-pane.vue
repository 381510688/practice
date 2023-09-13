<template>
  <div
    class="el-tab-pane"
    :id="`pane-${paneName}`"
  >
    <slot name="abc"></slot>
    <slot>后备内容</slot>
  </div>
</template>
<script>
  export default {
    name: 'TabPane',
    props: {
      label: String,
      name: String,
    },

    data() {
      return {
        index: null
      };
    },

    computed: {
      paneName() {
        return '12'
      }
    },

    updated() {
      console.log(123)
      // this.$parent.$emit('tab-nav-update');
    },

    created () {
      console.log('tab-pane', 'created')
    },
    mounted () {
      console.log('tab-pane', this)
    }
  };
</script>
