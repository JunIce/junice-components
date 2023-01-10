import { CSSProperties, ReactNode } from 'react';

export interface BreadcrumbProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  type?: 'default' | 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'inverse';

  title?: string | ReactNode;

  extra?: ReactNode;
  footer?: ReactNode;
}

export interface BreadcrumbItemProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;

  onClick?: Function,

  active?: boolean;
}
