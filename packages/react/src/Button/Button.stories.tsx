import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const basic = () => (
  <>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  </>
);

export const WithButtons1 = () => (
  <Button onClick={() => alert('You clicked me!')}>
    <div>
      <button>Click me</button>
    </div>
  </Button>
);
