import {
  CSSProperties,
  HTMLProps,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

export interface BaseAvatarProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  /**
   * @zh 按钮的尺寸
   * @en Size of the button
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
   * @en Three button shapes are available: `circle`, `round` and `square`
   * @defaultValue square
   */
  shape?: 'circle' | 'round' | 'square';

  autoFixFontSize?: boolean;

  /**
   * @zh 点击按钮的回调
   * @en Callback fired when the button is clicked
   */
  onClick?: (e: Event) => void;
}
