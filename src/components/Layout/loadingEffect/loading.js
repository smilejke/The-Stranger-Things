import React from 'react';
import { Spin } from 'antd';

function LoadingSpinner() {
  return (
    <div className='loader-spinner background'>
      <Spin size='large' tip='Loading...' className='spin-tip' />
    </div>
  );
}

export default LoadingSpinner;
