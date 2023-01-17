import { ChangeEvent, CSSProperties, ReactNode } from 'react';

export interface InputProps {
  style?: CSSProperties;
  className?: string | string[];

  dotStyle?: CSSProperties;
  disabled?: boolean;
  value?: any;
  onChange?: (e: ChangeEvent<any>) => void;
}
