<template>
  <div>
    <p>当前系统的主题色为 -- {{color}}</p>
    <p>当前viewport的宽高比为16:9 -- {{is16than9}}</p>
  </div>
</template>
<script>
  import perfersColorSchemeMixin from './perfersColorSchemeMixin.js'
  import aspectRatioMixin from './aspectRatioMixin.js'
  export default {
    name: 'SystemColor',
    mixins: [perfersColorSchemeMixin, aspectRatioMixin],
    data () {
      return {
        color: '',
        is16than9: false
      }
    },
    created () {
      this.perfersColorSchemeUpdate()
      this.perfersColorSchemeMedia.addEventListener('change', this.perfersColorSchemeUpdate)

      this.aspectRatioUpdate()
      this.aspectRatioMedia.addEventListener('change', this.aspectRatioUpdate)
    },
    destroyed () {
       this.perfersColorSchemeMedia.removeEventListener('change', this.perfersColorSchemeUpdate)
       this.aspectRatioMedia.removeEventListener('change', this.aspectRatioUpdate)
    } 
  }
</script>