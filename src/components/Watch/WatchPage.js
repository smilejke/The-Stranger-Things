import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startLoading, stopLoading } from '../../store/Layout/actions.js';
import { bindActionCreators } from 'redux';
import { setSeasonData, setVotingData } from '../../store/Watch/actions.js';
import { setPageTitle } from '../../global/utils/global.js';
import Footer from '../Layout/Footer/Footer.js';
import WatchHeader from '../Watch/HeaderContainer/HeaderContainer.js';
import SerialSidebar from '../FirstGreetingsPage/SerialSidebar/SerialSidebar.js';
import SeriesBlock from './SeriesBlock/Series.js';

function WatchSerial(props) {
  const [watchData, setData] = useState(false);
  const { setSeasonData, startLoading, stopLoading, setVotingData } = props;
  const { id } = useParams();

  useEffect(() => {
    setPageTitle('Эпизоды сериала Очень странные дела');
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

  useEffect(() => {
    fetch(`http://localhost:3001/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVotingData(data.map((el) => el['mark']));
      });
  }, [id, setVotingData]);

  if (!watchData) return null;

  const { header, seriesBlock, description } = watchData;

  return (
    <div>
      <div className='watch-page-main-container'>
        <div className='watch-page-left-content'>
          <WatchHeader header={header} />
          <SeriesBlock series={seriesBlock} description={description} />
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
    marks: state.getSerialEpisodesData.marks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSeasonData: bindActionCreators(setSeasonData, dispatch),
    setVotingData: bindActionCreators(setVotingData, dispatch),
    startLoading: bindActionCreators(startLoading, dispatch),
    stopLoading: bindActionCreators(stopLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchSerial);
