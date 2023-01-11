import React, { forwardRef } from 'react';
import cs from '../_util/classNames';

import { TabsProps } from './interface';

import './Tabs.scss';

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, className, style } = props;
  const tabsRef = ref;

  const prefixCls = 'nav';
  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-tabs`]: true,
    },
    className,
  );

  const tabHeader = (
    <ul className={classNames} role="tablist">
      <li role="presentation">
        <a href="#home" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false">
          <span class="visible-xs">
            <i class="ti-home"></i>
          </span>
          <span class="hidden-xs"> Home</span>
        </a>
      </li>
      <li role="presentation">
        <a
          href="#profile"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
          aria-expanded="false"
        >
          <span class="visible-xs">
            <i class="ti-user"></i>
          </span>{' '}
          <span class="hidden-xs">Profile</span>
        </a>
      </li>
      <li role="presentation">
        <a
          href="#messages"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          aria-expanded="false"
        >
          <span class="visible-xs">
            <i class="ti-email"></i>
          </span>{' '}
          <span class="hidden-xs">Messages</span>
        </a>
      </li>
      <li role="presentation" class="active">
        <a
          href="#settings"
          aria-controls="settings"
          role="tab"
          data-toggle="tab"
          aria-expanded="true"
        >
          <span class="visible-xs">
            <i class="ti-settings"></i>
          </span>{' '}
          <span class="hidden-xs">Settings</span>
        </a>
      </li>
    </ul>
  );

  const tabContent = (
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="home">
        <div class="col-md-6">
          <h3>Best Clean Tab ever</h3>
          <h4>you can use it with the small code</h4>
        </div>
        <div class="col-md-5 pull-right">
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div role="tabpanel" class="tab-pane" id="profile">
        <div class="col-md-6">
          <h3>Lets check profile</h3>
          <h4>you can use it with the small code</h4>
        </div>
        <div class="col-md-5 pull-right">
          <p>
            Vulputate eget, arcu, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div role="tabpanel" class="tab-pane" id="messages">
        <div class="col-md-6">
          <h3>Come on you have a lot message</h3>
          <h4>you can use it with the small code</h4>
        </div>
        <div class="col-md-5 pull-right">
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div role="tabpanel" class="tab-pane" id="settings">
        <div class="col-md-6">
          <h3>Just do Settings</h3>
          <h4>you can use it with the small code</h4>
        </div>
        <div class="col-md-5 pull-right">
          <p>
            Vulputate eget, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  );

  return (
    <div ref={tabsRef}>
      {tabHeader}
      {tabContent}
    </div>
  );
});

export default Tabs;
