import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { RowProps } from './interface';

import './Row.scss';

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children, className, style } = props;
  const rowRef = ref;

  const prefixCls = 'row';
  const classNames = cs(
    prefixCls,
    {
      // [`${prefixCls}-block`]: block
    },
    className,
  );

  return (
    <div ref={rowRef} className={classNames} style={style}>
      {children}
    </div>
  );
});

export default Row;
