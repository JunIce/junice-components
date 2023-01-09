import { CSSProperties, ReactNode } from 'react';

export interface PanelProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  type?: 'default' | 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'inverse';

  title?: string | ReactNode;

  extra?: ReactNode;
  footer?: ReactNode;
}
