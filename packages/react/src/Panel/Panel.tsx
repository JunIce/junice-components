import React from 'react';
import { forwardRef } from 'react';
import cs from '../_util/classNames';
import { PanelProps } from './interface';

import './Panel.scss';

const Panel = forwardRef<HTMLDivElement, PanelProps>((props, ref) => {
  const { children, type, title, className, extra, footer } = props;

  const prefixCls = 'panel';

  const _type = type || 'default';

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-${_type}`]: true,
    },
    className,
  );

  return (
    <div className={classNames}>
      <div className={`${prefixCls}-heading`}>
        <span>{title}</span>
        {extra && <div className={`${prefixCls}-action`}>{extra}</div>}
      </div>
      <div className={`${prefixCls}-wrapper`}>
        <div className={`${prefixCls}-body`}>{children}</div>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    </div>
  );
});

export default Panel;
