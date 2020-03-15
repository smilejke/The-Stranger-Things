import React from 'react';
import Footer from '../Layout/Footer/Footer.js';
import WatchHeader from '../Watch/HeaderContainer/HeaderContainer.js';
import SerialSidebar from '../FirstGreetingsPage/SerialSidebar/SerialSidebar.js';
import SeriesBlock from './SeriesBlock/Series.js';
import SeasonDescription from './SeasonDescription/SeasonDescription.js';

function WatchSerial() {
  return (
    <div>
      <div className='watch-page-main-container'>
        <div className='watch-page-left-content'>
          <WatchHeader />
          <SeriesBlock />
          <SeasonDescription />
        </div>
        <div className='watch-page-right-content'>
          <SerialSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WatchSerial;
