import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { BaseButtonProps } from './interface';

import './Progress.scss';

const Progress = forwardRef<null, BaseButtonProps>((props, ref) => {
  const {
    children,
    size,
    loading,
    className,
    type,
    shape,
    disabled,
    outline = false,
    block = false,
    onClick,
  } = props;
  const buttonRef = ref;

  const prefixCls = 'progress';

  const classNames = cs(
    `${prefixCls}-bar`,
    {
      [`${prefixCls}-block`]: block
    },
    className,
  );

  return (
    <div className={prefixCls}>
      <div className={classNames} style={{ width: '60%' }} role="progressbar">
        <span className="sr-only">60% Complete</span>{' '}
      </div>
    </div>
  );
});

export default Progress;
