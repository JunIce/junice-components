import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
};

export const type = () => (
  <>
    <Input
      type="text"
      placeholder="working input"
      onChange={(e: any) => {
        console.log(e);
      }}
    />
  </>
);

export const disabled = () => <Input type="text" value="Hello world" disabled />;
