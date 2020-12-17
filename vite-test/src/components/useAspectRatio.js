import { ref, onUnmounted, onMounted } from 'vue'
export default function usePrefersColorScheme () {
  let media
  let is16than9 = ref(null)

  const update = () => {
    media = window.matchMedia('(aspect-ratio: 16/9)')
    is16than9.value = media.matches
  }
  
  update()
  media.addEventListener('change', update)
  onUnmounted(() => {
    media.removeEventListener('change', update)
  })

  return is16than9
}