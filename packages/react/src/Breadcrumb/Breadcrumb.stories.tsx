import React, { CSSProperties } from 'react';
import Breadcrumb from '.';

export default {
  title: 'Breadcrumb',
};

export const basic = () => {
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#fff' }}>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Ui Elements</Breadcrumb.Item>
          <Breadcrumb.Item active={true}>Tabs</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() => {
              alert('Ui Elements');
            }}
          >
            Ui Elements
          </Breadcrumb.Item>
          <Breadcrumb.Item active={true}>Tabs</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};
