import React, { forwardRef, useState, ChangeEvent, useRef } from 'react';

import { InputProps } from './Input.types';

import './Input.scss';
import cs from '../_util/classNames';

const Input = forwardRef<null, InputProps>((props, ref) => {
  const {
    className,
    type = 'text',
    disabled = false,
    value = '',
    rows = 4,
    placeholder,
    onChange,
  } = props;
  const inputRef = useRef<any>(null);

  const [currentValue, setValue] = useState(value);

  const prefix = 'input';
  const classNames = cs(`${prefix}-control`, className);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target?.value as string);
    onChange && onChange(e);
  };

  let element = (
    <input
      ref={inputRef}
      type={type}
      value={currentValue}
      disabled={disabled}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
  if (type == 'textarea') {
    element = (
      <textarea
        ref={inputRef}
        value={currentValue}
        disabled={disabled}
        rows={rows}
        onChange={handleOnChange}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return <div className={classNames}>{element}</div>;
});

export default Input;
