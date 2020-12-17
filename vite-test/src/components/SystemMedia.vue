<template>
  <div>
    <p>当前系统的主题色为 -- {{color}}</p>
    <p>当前viewport的宽高比为16:9 -- {{is16than9}}</p>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue'
  import usePrefersColorScheme from './usePrefersColorScheme.js'
  import useAspectRatio from './useAspectRatio.js'
  export default {
    name: 'SystemColor',
    setup () {
      let color = usePrefersColorScheme()
      let is16than9 = useAspectRatio()
      return {
        color,
        is16than9
      }
    }
  }
</script>