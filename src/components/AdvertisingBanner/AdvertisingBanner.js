import React from 'react';
import '../../index.css';
import AvertisingLine from './horizontalAdv.js';
import { liquidBanner } from '../general/greetingsPageData.js';

function AdvertisingBanner() {
  return (
    <div className='container'>
      {liquidBanner.map((season) => {
        return <AvertisingLine key={season.id} background={season} />;
      })}
    </div>
  );
}
export default AdvertisingBanner;
