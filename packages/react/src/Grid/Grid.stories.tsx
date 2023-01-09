import React, { CSSProperties } from 'react';
import Col from '../Col';
import Row from '../Row';

export default {
  title: 'Grid',
};

export const basic = () => {

  const rowStyle: CSSProperties = {
    marginBottom: '20px'
  }

  const colStyle: CSSProperties = {
    'textAlign': 'center',
    border: '1px solid #78828c21',
    padding: '10px 15px',
    backgroundColor: '#f7fafc'
  }

  return (
    <>
      <Row style={rowStyle}>
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


      <Row style={rowStyle}>
        <Col span={6} style={colStyle}>col</Col>
        <Col span={6} style={colStyle}>col</Col>
      </Row>

      <Row style={rowStyle}>
        <Col span={4} style={colStyle}>col</Col>
        <Col span={4} style={colStyle}>col</Col>
        <Col span={4} style={colStyle}>col</Col>
      </Row>
    </>
  )
};
