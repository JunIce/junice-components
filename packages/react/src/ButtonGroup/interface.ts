import {
  CSSProperties,
  HTMLProps,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

export interface BaseButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  vertical?: boolean;
  justified?: boolean;
}
