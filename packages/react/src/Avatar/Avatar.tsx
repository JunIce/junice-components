import React, { forwardRef, ReactElement, useEffect, useRef } from 'react';
import cs from '../_util/classNames';

import { BaseAvatarProps } from './interface';

import './Avatar.scss';
import { isString } from '../_util/is';

const Avatar = forwardRef<null, BaseAvatarProps>((props, ref) => {
  const { children, size, className, autoFixFontSize = true, shape = 'circle' } = props;
  const avatarRef = useRef(null);

  const prefixCls = 'avatar';

  const textRef = useRef(null);

  useEffect(() => {
    if (autoFixFontSize) {
      autoFixFontSizeHandler();
    }
  }, [size, children]);

  function autoFixFontSizeHandler() {
    if (textRef.current) {
      const textWidth = textRef.current.clientWidth;
      const size = avatarRef.current?.offsetWidth;
      const scale = size / (textWidth + 8);

      if (size && scale < 1) {
        textRef.current.style.transform = `scale(${scale}) translateX(-50%)`;
      }
    }
  }

  const renderChildren = () => {
    if ((children as ReactElement).type == 'img' || (children as ReactElement).type == 'picture') {
      return <span className="avatar-img">{children}</span>;
    }

    if (isString(children)) {
      return (
        <span ref={textRef} className="avatar-text">
          {children}
        </span>
      );
    }
    return children;
  };

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-circle`]: shape == 'circle',
    },
    className,
  );

  return (
    <div ref={avatarRef} className={classNames}>
      {renderChildren()}
    </div>
  );
});

export default Avatar;
