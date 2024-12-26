export type PlacementType = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
export type SizeType = 'small' | 'mini' | "large";
export interface PluginOptionTypes {
  size?:SizeType,
  zIndex?: number,
}