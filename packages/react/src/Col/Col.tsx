import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { ColProps } from './interface';

import './Col.scss';

const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { children, className, span, style } = props;
  const rowRef = ref;

  const prefixCls = 'col';

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-xs-${span}`]: true,
    },
    className,
  );

  return (
    <div ref={rowRef} className={classNames} style={{ ...style }}>
      {children}
    </div>
  );
});

export default Col;
