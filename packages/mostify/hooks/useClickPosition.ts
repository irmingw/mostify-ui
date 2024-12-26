import { ref, onMounted, onUnmounted } from 'vue';

export const useClickPosition = () => {
  const x = ref(0);
  const y = ref(0);

  const handleMouseMove = (event: MouseEvent) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  })

  return { x, y };
};