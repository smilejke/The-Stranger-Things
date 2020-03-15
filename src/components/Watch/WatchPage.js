import React from 'react';
import Footer from '../Layout/Footer/Footer.js';
import WatchHeader from '../Watch/HeaderContainer/HeaderContainer.js';
import SerialSidebar from '../FirstGreetingsPage/SerialSidebar/SerialSidebar.js';
import SeriesBlock from './SeriesBlock/Series.js';
import SeasonDescription from './SeasonDescription/SeasonDescription.js';
// import LoadingSpinner from '../Layout/loadingEffect/loading.js';

function WatchSerial(props) {
  if (!props.season) return <div>Loading</div>;

  const { header, seriesBlock, description } = props.season;

  return (
    <div>
      <div className='watch-page-main-container'>
        <div className='watch-page-left-content'>
          <WatchHeader header={header} />
          <SeriesBlock series={seriesBlock} />
          <SeasonDescription description={description} />
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
