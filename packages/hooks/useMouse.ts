import { ref, onMounted, onUnmounted } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const mousemove = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', mousemove, false)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', mousemove, false)
  })


  return {
    x,
    y
  }

}