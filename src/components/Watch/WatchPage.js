import React, { useState, useEffect } from 'react';
import Footer from '../Layout/Footer/Footer.js';
import WatchHeader from '../Watch/HeaderContainer/HeaderContainer.js';
import SerialSidebar from '../FirstGreetingsPage/SerialSidebar/SerialSidebar.js';
import SeriesBlock from './SeriesBlock/Series.js';
import SeasonDescription from './SeasonDescription/SeasonDescription.js';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startLoading, stopLoading } from '../../store/Layout/actions.js';
import { bindActionCreators } from 'redux';
import { setSeasonData } from '../../store/Watch/actions.js';

function WatchSerial(props) {
  const [watchData, setData] = useState(false);
  const { setSeasonData, startLoading, stopLoading } = props;

  const { id } = useParams();

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      fetch(`http://localhost:3001/watch?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data[0]);
          setSeasonData(data[0]);
        })
        .then(
          setTimeout(() => {
            stopLoading();
          }, 100),
        );
    }, 900);
  }, [id, setSeasonData, startLoading, stopLoading]);

  if (!watchData) return null;

  const { header, seriesBlock, description } = watchData;

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

const mapStateToProps = (state) => {
  return {
    seasonId: state.getSerialEpisodesData.seasonId,
    currentSeasonData: state.getSerialEpisodesData.currentSeasonData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSeasonData: bindActionCreators(setSeasonData, dispatch),
    startLoading: bindActionCreators(startLoading, dispatch),
    stopLoading: bindActionCreators(stopLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchSerial);
