<template>
    <div>
        <!--<input v-bind="$attrs" v-on="$listeners">child组件</input>-->
        <input v-bind="$attrs" v-on="emitListeners">child组件</input>
        <button @click="getCompAttrs">获取props</button>
    </div>
</template>
<script>
    export default {
      inheritAttrs: false, // age、address不会铺到外层div上
      name: 'child',
      props: ['name'],
      computed: {
        /*这里必须是计算属性*/
        emitListeners() {
          return {
            ...this.$listeners,
            mousemove: event => {
              this.$emit('m1', event)
            }
          }
        }
      },
      methods: {
        getCompAttrs() {
          console.log(this.$attrs)
          console.log(this.$listeners)
        }
      }
    }
</script>