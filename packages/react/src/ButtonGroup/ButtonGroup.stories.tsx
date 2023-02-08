import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button';

export default {
  title: 'ButtonGroup',
};

export const basic = () => (
  <>
    <div>
      <ButtonGroup>
        <Button type="default">default</Button>
        <Button type="info">info</Button>
        <Button type="primary">primary</Button>
      </ButtonGroup>
    </div>

    <div style={{ marginTop: '20px' }}>
      <ButtonGroup vertical>
        <Button type="default">default</Button>
        <Button type="info">info</Button>
        <Button type="primary">primary</Button>
      </ButtonGroup>
    </div>

    <div style={{ marginTop: '20px' }}>
      <ButtonGroup justified>
        <Button type="default">default</Button>
        <Button type="info">info</Button>
        <Button type="primary">primary</Button>
      </ButtonGroup>
    </div>
  </>
);
