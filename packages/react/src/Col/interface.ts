import {
  CSSProperties,
  HTMLProps,
  ReactNode,
} from 'react';

export interface ColProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  span?: number;
}
