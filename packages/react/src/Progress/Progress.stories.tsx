import React from 'react';
import Progress from './Progress';

export default {
  title: 'Progress',
};

export const basic = () => (
  <>
    <Progress type="default" value={50}></Progress>
    <Progress type="info" value={50}></Progress>
    <Progress type="primary" value={50}></Progress>
    <Progress type="success" value={50}></Progress>
    <Progress type="danger" value={50}></Progress>
    <Progress type="warning" value={50}></Progress>
  </>
);
export const size = () => (
  <>
    <Progress type="info" size="small" value={50}></Progress>
    <Progress type="info" value={50}></Progress>
    <Progress type="info" size="medium" showProgress value={50}></Progress>
    <Progress type="info" size="large" value={50}></Progress>
  </>
);
export const striped = () => (
  <>
    <Progress type="info" striped value={50}></Progress>
  </>
);

export const stripeAnimate = () => (
  <>
    <Progress type="info" size="large" striped active value={50}></Progress>
  </>
);

export const bottom = () => (
  <>
    <Progress type="info" size="large" vertical striped active value={50}></Progress>
    <Progress type="info" size="large" fromBottom striped active value={50}></Progress>
  </>
);
