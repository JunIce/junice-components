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
    vertical = false,
    fromBottom = false,
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

  const progressStyle: Record<string, any> = {};
  if (vertical || fromBottom) {
    progressStyle.height = `${value}%`;
  } else {
    progressStyle.width = `${value}%`;
  }

  return (
    <div
      className={cs(prefixCls, {
        [`${prefixCls}-sm`]: size == 'small',
        [`${prefixCls}-md`]: size == 'medium',
        [`${prefixCls}-lg`]: size == 'large',
        [`${prefixCls}-vertical`]: vertical,
        [`${prefixCls}-vertical-bottom`]: fromBottom,
        active,
      })}
    >
      <div className={classNames} style={progressStyle} role="progressbar">
        {renderChildren()}
      </div>
    </div>
  );
});

export default Progress;
