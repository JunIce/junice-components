import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { BaseButtonGroupProps } from './interface';

import './ButtonGroup.scss';

const ButtonGroup = forwardRef<null, BaseButtonGroupProps>((props, ref) => {
  const { children, className, vertical, justified } = props;
  const buttonRef = ref;

  const prefixCls = 'btn-group';

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-vertical`]: vertical,
      [`${prefixCls}-justified`]: justified,
    },
    className,
  );

  return (
    <div ref={buttonRef} className={classNames}>
      {children}
    </div>
  );
});

export default ButtonGroup;
