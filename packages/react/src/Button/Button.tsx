import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { BaseButtonProps } from './interface';

import './Button.scss';

const Button = forwardRef<null, BaseButtonProps>((props, ref) => {
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

  const prefixCls = 'btn';
  const _type = type || 'default';
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${_type}`,
    {
      [`${prefixCls}-block`]: block,
      // [`${prefixCls}-long`]: long,
      // [`${prefixCls}-status-${status}`]: status,
      // [`${prefixCls}-loading-fixed-width`]: loadingFixedWidth,
      [`${prefixCls}-loading`]: loading,
      // [`${prefixCls}-link`]: href,
      // [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
      [`${prefixCls}-disabled`]: disabled,
      // [`${prefixCls}-rtl`]: rtl,
      [`${prefixCls}-outline`]: outline,
      [`${prefixCls}-rounded`]: shape == 'round',
      [`${prefixCls}-circle`]: shape == 'circle',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-xs`]: size === 'mini',
    },
    className,
  );

  const onInnerClick: React.MouseEventHandler<HTMLButtonElement> = (e: any) => {
    onClick && onClick(e);
  };

  return (
    <button ref={buttonRef} className={classNames} onClick={onInnerClick}>
      {children}
    </button>
  );
});

export default Button;
