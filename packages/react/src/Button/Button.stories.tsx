import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const basic = () => (
  <>
    <Button type="default">default</Button>
    <Button type="info">info</Button>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="danger">danger</Button>
    <Button type="warning">warning</Button>
  </>
);
export const disabled = () => (
  <>
    <Button type="default" disabled>
      default
    </Button>
    <Button type="info" disabled>
      info
    </Button>
    <Button type="primary" disabled>
      primary
    </Button>
    <Button type="success" disabled>
      success
    </Button>
    <Button type="danger" disabled>
      danger
    </Button>
    <Button type="warning" disabled>
      warning
    </Button>
  </>
);
export const outline = () => (
  <>
    <Button type="default" outline>
      default
    </Button>
    <Button type="info" outline>
      info
    </Button>
    <Button type="primary" outline>
      primary
    </Button>
    <Button type="success" outline>
      success
    </Button>
    <Button type="danger" outline>
      danger
    </Button>
    <Button type="warning" outline>
      warning
    </Button>
  </>
);
export const shape = () => (
  <>
    <Button type="default" shape="circle">
      default
    </Button>
    <Button type="info" shape="round">
      info
    </Button>
  </>
);

export const size = () => (
  <>
    <Button type="default" size="large">
      default
    </Button>
    <Button type="default" size="default">
      default
    </Button>
    <Button type="default" size="small">
      default
    </Button>
    <Button type="default" size="mini">
      default
    </Button>
  </>
);

export const block = () => (
  <>
    <Button type="default" size="large" block>
      default
    </Button>
  </>
);
