import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { BaseButtonProps } from './interface';

import './Progress.scss';

const Progress = forwardRef<null, BaseButtonProps>((props, ref) => {
  const {
    children,
    size,
    value = 0,
    loading,
    className,
    type,
    shape,
    disabled,
    outline = false,
    block = false,
    striped = false,
    active = false,
    showProgress,
    onClick,
  } = props;
  const buttonRef = ref;

  const prefixCls = 'progress';

  const classNames = cs(
    `${prefixCls}-bar`,
    {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-bar-striped`]: striped,
    },
    className,
  );

  const renderChildren = () => {
    if (children) return children;
    if (showProgress) return `${value}%`;
    return <span className="sr-only">{value}% Complete</span>;
  };

  return (
    <div
      className={cs(prefixCls, {
        [`${prefixCls}-sm`]: size == 'small',
        [`${prefixCls}-md`]: size == 'medium',
        [`${prefixCls}-lg`]: size == 'large',
        active,
      })}
    >
      <div className={classNames} style={{ width: `${value}%` }} role="progressbar">
        {renderChildren()}
      </div>
    </div>
  );
});

export default Progress;
