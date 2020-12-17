<template>
  <div>
    <p>当前系统的主题色为 -- {{color}}</p>
    <p>当前viewport的宽高比为16:9 -- {{is16than9}}</p>
  </div>
</template>
<script>
  
  export default {
    name: 'SystemColor',
    data () {
      return {
        color: '',
        is16than9: false
      }
    },
    methods: {
      perfersColorSchemeUpdate () {
        this.perfersColorSchemeMedia = window.matchMedia('(perfers-color-scheme: dark)')
        this.color = this.perfersColorSchemeMedia.matches ? 'dark': 'light'
      },
      aspectRatioUpdate () {
        this.aspectRatioMedia = window.matchMedia('(aspect-ratio: 16/9)')
        this.is16than9 =  this.aspectRatioMedia.matches
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