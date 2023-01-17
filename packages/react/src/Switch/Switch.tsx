import React, { forwardRef, useState, MouseEventHandler } from 'react';

import { InputProps } from './inteface';

import './Switch.scss';
import cs from '../_util/classNames';

const Input = forwardRef<null, InputProps>((props, ref) => {
  const { className, style, dotStyle, disabled = false, value = '', onChange } = props;

  const [isChecked, setChecked] = useState(value);

  const prefix = 'switch';
  const classNames = cs(
    `${prefix}`,
    {
      checked: isChecked,
      disabled: disabled,
    },
    className,
  );
  const handleOnChange = (e: any) => {
    if (disabled) return;
    setChecked(!isChecked);
    onChange && onChange(e);
  };
  return (
    <button className={classNames} style={style} role="button" onClick={handleOnChange}>
      <div className="switch-dot" style={dotStyle}></div>
    </button>
  );
});

export default Input;
