// 放置位置类型
export type PlacementType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

// 尺寸类型
export type SizeType = 'small' | 'mini' | "large";

// 注册插件选项类型
export interface PluginOptionTypes {
  size?:SizeType,
  zIndex?: number,
}