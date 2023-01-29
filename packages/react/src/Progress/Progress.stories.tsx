import React from 'react';
import Progress from './Progress';

export default {
  title: 'Progress',
};

export const basic = () => (
  <>
    <Progress type="default">default</Progress>
    <Progress type="info">info</Progress>
    <Progress type="primary">primary</Progress>
    <Progress type="success">success</Progress>
    <Progress type="danger">danger</Progress>
    <Progress type="warning">warning</Progress>
  </>
);
