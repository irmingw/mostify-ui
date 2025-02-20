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
  width?: string,
  iconSize?: number
  iconColor?: string,
}