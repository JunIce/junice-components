import React, { forwardRef, PropsWithChildren, ReactElement, useState } from 'react';
import cs from '../_util/classNames';

import { TabPaneProps, TabsProps } from './interface';

import './Tabs.scss';

const getPaneChildren = (props: TabsProps) => {
  const { children } = props;
  const paneChildren = [];
  React.Children.forEach(children, (child: ReactElement) => {
    if (child) {
      paneChildren.push(child);
    }
  });
  return paneChildren as ReactElement<TabPaneProps>[];
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, className, style } = props;
  const tabsRef = ref;

  const [currentKey, setCurrentKey] = useState('');

  const paneChildren = getPaneChildren({ children });

  const prefixCls = 'nav';
  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-tabs`]: true,
    },
    className,
  );

  console.log(paneChildren);

  const tabHeader = (
    <ul className={classNames} role="tablist">
      {paneChildren.map((child, idx) => {
        const cls = cs('tab-pane_label', {
          active: currentKey === child.key,
        });
        return (
          <li
            role="presentation"
            key={child.key}
            onClick={() => {
              console.log(child.key);

              setCurrentKey(child.key as string);
            }}
          >
            <div role="tab" className={cls} data-toggle="tab" aria-expanded="false">
              <span className="hidden-xs" aria-controls={`${idx}`}>
                {child.props.label}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const tabContent = (
    <div className="tab-content">
      {paneChildren.map((child, idx) => {
        const cls = cs('tab-pane', {
          active: currentKey === child.key,
        });
        return (
          <div role="tabpanel" key={child.key} className={cls} id={child.props.label as string}>
            {child.props.children}
          </div>
        );
      })}
    </div>
  );

  return (
    <div ref={tabsRef}>
      {tabHeader}
      {tabContent}
    </div>
  );
});

const TabPane = forwardRef<HTMLDivElement, TabPaneProps>((props, ref) => {
  return (
    <div role="tabpanel" className="tab-pane" id="settings">
      {props.children}
    </div>
  );
});

const TabsComponent = Tabs as typeof Tabs & {
  TabPane: typeof TabPane;
};

TabsComponent.displayName = 'Tabs';

TabsComponent.TabPane = TabPane;

export default TabsComponent;
