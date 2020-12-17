export default {
  methods: {
    perfersColorSchemeUpdate () {
      this.perfersColorSchemeMedia = window.matchMedia('(perfers-color-scheme: dark)')
      this.color = this.perfersColorSchemeMedia.matches ? 'dark': 'light'
    }
  }
}