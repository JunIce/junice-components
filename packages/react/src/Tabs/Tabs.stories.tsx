import React, { CSSProperties } from 'react';
import Tabs from '.';

export default {
  title: 'Tabs',
};

export const basic = () => {
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#edf1f5' }}>
        <Tabs></Tabs>
      </div>
    </>
  );
};
