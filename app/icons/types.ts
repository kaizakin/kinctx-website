export interface AnimatedIconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}

export interface AnimatedIconHandle {
  startAnimation: () => void | Promise<void>;
  stopAnimation: () => void;
}
