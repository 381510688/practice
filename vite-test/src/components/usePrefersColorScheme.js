import { ref, onUnmounted, onMounted } from 'vue'
export default function usePrefersColorScheme () {
  let media 
  let color = ref(null)

  const update = () => {
    media = window.matchMedia('(perfers-color-scheme: dark)')
    color.value = media.matches ? 'dark': 'light'
  }
  
  update()
  media.addEventListener('change', update)
  onUnmounted(() => {
    media.removeEventListener('change', update)
  })

  return color
}