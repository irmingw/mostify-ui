export interface MessageBoxTypes {
  type: 'primary' | 'success' | 'warning' | 'error',
  title?: string,
  message?: string,
  icon?: string | Object
  showIcon?: boolean,
  
  showClose?: boolean,
  customClass?: string,
  duration?: number,
  cancelText?: string,
  confirmText?: string,
  cancelButtonProp?: Object,
  confirmButtonProp?: Object,
  zIndex?: number,
  width?: number,
  iconSize?: number
  iconColor?: string,
}