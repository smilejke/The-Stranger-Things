import { Breadcrumb } from 'antd';
import React from 'react';
import '../../index.css';

function Path() {
  return (
    <Breadcrumb className='path'>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href=''>Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href=''>Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Path;
