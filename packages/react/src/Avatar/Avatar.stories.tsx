import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Avatar',
};

export const basic = () => (
  <>
    <Avatar shape='circle'>default</Avatar>
    <Avatar>Arco</Avatar>
    <Avatar>
      <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </Avatar>
  </>
);
