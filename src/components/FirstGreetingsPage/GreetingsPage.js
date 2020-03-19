import React, { useState, useEffect } from 'react';
import GreetTittle from './Title/Title.js';
import SerialDescription from './SerialDescription/SerialDescription.js';
import WatchBlock from './WatchBlock/WatchBlock.js';
import SerialAnatomy from './Anatomy/Anatomy.js';
import SerialNews from './SerialNews/SerialNews.js';
import SerialSidebar from './SerialSidebar/SerialSidebar.js';
import { setNewsData } from '../../store/News/actions.js';
import { startLoading, stopLoading } from '../../store/Layout/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../Layout/Footer/Footer.js';

function GreetingsPage(props) {
  const [newsData, setData] = useState(false);
  const { setNewsData, startLoading, stopLoading } = props;

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      fetch('http://localhost:3001/greetings')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setNewsData(data.news);
        })
        .then(() => {
          stopLoading();
        }, 100);
    }, 900);
  }, [setNewsData, startLoading, stopLoading]);

  if (!newsData) return null;

  const { header, shortDescription, watchBlock, anatomy, news } = newsData;

  return (
    <div>
      <div className='greetings-page-main-container'>
        <div className='greetings-page-left-content'>
          <GreetTittle header={header} />
          <SerialDescription description={shortDescription} />
          <WatchBlock images={watchBlock} />
          <SerialAnatomy data={anatomy} />
          <SerialNews news={news} />
        </div>
        <div className='greetings-page-right-content'>
          <SerialSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.newsDataSetter.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewsData: bindActionCreators(setNewsData, dispatch),
    startLoading: bindActionCreators(startLoading, dispatch),
    stopLoading: bindActionCreators(stopLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingsPage);
