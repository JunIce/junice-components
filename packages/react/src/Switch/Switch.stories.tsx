import React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
};

export const type = () => (
  <>
    <Switch
      onChange={(e: any) => {
        console.log(e);
      }}
    />

    <Switch
      disabled
      onChange={(e: any) => {
        console.log(e);
      }}
    />
  </>
);
