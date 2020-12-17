export default {
  methods: {
    aspectRatioUpdate () {
      this.aspectRatioMedia = window.matchMedia('(aspect-ratio: 16/9)')
      this.is16than9 =  this.aspectRatioMedia.matches
    }
  }
}