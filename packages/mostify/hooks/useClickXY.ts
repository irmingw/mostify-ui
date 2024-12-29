import { ref, onMounted, onUnmounted } from 'vue';

export const useClickXY = () => {
  const x = ref(0);
  const y = ref(0);

  const handleClick = (event: MouseEvent) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  onMounted(() => {
    document.addEventListener('click', handleClick);
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick);
  })

  return { x, y };
};