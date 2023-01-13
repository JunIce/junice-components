import React, { forwardRef, useState, ChangeEvent, useRef } from 'react';

import { InputProps } from './Input.types';

import './Input.scss';
import cs from '../_util/classNames';

const Input = forwardRef<null, InputProps>((props, ref) => {
  const { className, type = 'text', disabled = false, value = '', placeholder, onChange } = props;
  const inputRef = useRef<HTMLInputElement>();

  const [currentValue, setValue] = useState(value);

  const prefix = 'input';
  const classNames = cs(`${prefix}-control`, className);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value as string);
    onChange && onChange(e);
  };
  return (
    <div className={classNames}>
      <input
        ref={inputRef}
        type={type}
        value={currentValue}
        disabled={disabled}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;
