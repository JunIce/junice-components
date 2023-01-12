import React, { CSSProperties } from 'react';
import Tabs from '.';

export default {
  title: 'Tabs',
};

export const basic = () => {
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#fff' }}>
        <Tabs>
          <Tabs.TabPane key="home" label="home">
            <div className="col-md-6">
              <h3>home</h3>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="profile" label="profile">
            <div className="col-md-6">
              <h3>profile</h3>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="messages" label="messages">
            <div className="col-md-6">
              <h3>messages</h3>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};
