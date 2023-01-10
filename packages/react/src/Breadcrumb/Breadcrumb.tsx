import React from 'react';
import { forwardRef } from 'react';
import cs from '../_util/classNames';
import { BreadcrumbItemProps, BreadcrumbProps } from './interface';

import './Breadcrumb.scss';

export const BreadcrumbItem = forwardRef<HTMLDivElement, BreadcrumbItemProps>((props, ref) => {
  const { children, active, style, onClick } = props;

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <li className={active ? 'active' : ''} style={style} onClick={handleOnClick}>
      {children}
    </li>
  );
});

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const { children, style, className } = props;

  const prefixCls = 'breadcrumb';

  const classNames = cs(prefixCls, className);

  return (
    <ol className={classNames} style={style}>
      {children}
    </ol>
  );
});

const BreadcrumbComponent = Breadcrumb as typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

BreadcrumbComponent.displayName = 'Breadcrumb';

BreadcrumbComponent.Item = BreadcrumbItem;

export default BreadcrumbComponent;
