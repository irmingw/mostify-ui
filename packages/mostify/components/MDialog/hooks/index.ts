
import { ref, computed } from 'vue';

export const useDialogRef = () => {
  const dialogRef = ref<HTMLElement | null>(null)
  const wrapperRef = ref<HTMLElement | null>(null)
  const maskRef = ref<HTMLElement | null>(null)
  const bodyRef = ref<HTMLElement | null>(null)
  return { dialogRef, wrapperRef, maskRef, bodyRef }
}

export const useDialogStyle = (props) => {
  const contentStyle = computed(() => {
    const width = (typeof props.width === 'number' ? `${props.width}px` : props.width) || 'auto'
    const height = (typeof props.height === 'number' ? `${props.height}px` : props.height) || 'auto'

    if (props.fullscreen) {
      return {
        width: '100%',
        padding: '0px',
        margin: '0px',
        height: '100%',
      }
    }
    return {
      width,
      maxWidth: '100%',
      height,
      margin: `${props.top && props.top !== 'center' ? '0 auto' : '24px auto'}`,
    }
  })

  const wrapperStyle = computed(() => {
    if (props.fullscreen) {
      return `width: 100%; height: 100%;`
    } else if (props.top === 'center') {
      return `display: flex; 
        align-items: center; 
        justify-content: center; 
        min-height: 100%;
      `
    }

    return `position:relative;top: ${props.top};padding-bottom:24px;`
  })

  const bodyStyle = computed(() => {
    return `width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;`
  })
  return { contentStyle, wrapperStyle, bodyStyle }
} 