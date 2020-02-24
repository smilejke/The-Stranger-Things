import React from 'react';
import '../../index.css';
import AvertisingLine from './horizontalAdv.js';

function AdvertisingBanner() {
  return (
    <div className='container'>
      <AvertisingLine color='red' text='Angular' />
      <AvertisingLine color='blue' text='VueJs' />
      <AvertisingLine color='green' text='ReactJs' />
    </div>
  );
}
export default AdvertisingBanner;
