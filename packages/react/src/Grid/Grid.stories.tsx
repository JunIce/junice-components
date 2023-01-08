import React, { CSSProperties } from 'react';
import Col from '../Col';
import Row from '../Row';

export default {
  title: 'Grid',
};

export const basic = () => {

  const colStyle: CSSProperties = {
    'textAlign': 'center',
    backgroundColor: 'red'
  }

  return (
    <>
      <Row>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>

        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>

        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
        <Col span={1} style={colStyle}>col</Col>
      </Row>
    </>
  )
};
