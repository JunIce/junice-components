import { ChangeEvent, CSSProperties, ReactNode } from 'react';

export interface InputProps {
  style?: CSSProperties;
  className?: string | string[];

  type?: 'text' | 'file' | 'textarea' | 'password';
  rows?: number;
  disabled?: boolean;
  value?: any;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
}
