import {
  CSSProperties,
  HTMLProps,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

export interface TabsProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  type?: 'card';

  size?: 'mini' | 'small' | 'default' | 'large';

  onClick?: (e: Event) => void;
}

export interface TabPaneProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  key: string;
  label: string | ReactNode;
}
