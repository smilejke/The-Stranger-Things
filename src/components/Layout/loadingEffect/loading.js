import React from 'react';
import { Spin } from 'antd';

function LoadingSpinner() {
  return (
    <div className='loader-spinner background'>
      <Spin size='large' />
    </div>
  );
}

export default LoadingSpinner;
