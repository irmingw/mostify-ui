export interface MButtonType {
  // 尺寸
  size?: 'mini' | 'small' | 'large';
  // 形状
  shape?: 'circle' | 'round' | 'rect';
  // 类型
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'link';
  // 朴素按钮
  plain?: boolean;
  // 禁用状态
  disabled?: boolean;
  // 加载中状态
  loading?: boolean;
  // 块级按钮
  block?: boolean;
  // 是否是浅色背景
  light?: boolean;
}