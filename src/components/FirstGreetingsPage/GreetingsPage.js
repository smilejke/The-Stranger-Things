import React, { useState, useEffect } from 'react';
import GreetTittle from './Title/Title.js';
import SerialDescription from './SerialDescription/SerialDescription.js';
import WatchBlock from './WatchBlock/WatchBlock.js';
import SerialAnatomy from './Anatomy/Anatomy.js';
import SerialNews from './SerialNews/SerialNews.js';
import LoadingSpinner from '../Layout/loadingEffect/loading.js';
import SerialSidebar from './SerialSidebar/SerialSidebar.js';
import { setNewsData } from '../../store/News/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../Layout/Footer/Footer.js';

function GreetingsPage(props) {
  const [newsData, setData] = useState(false);
  const { setNewsData } = props;

  useEffect(() => {
    if (!newsData) {
      setTimeout(() => {
        fetch('http://localhost:3001/greetings')
          .then((response) => response.json())
          .then((data) => setData(data));
      }, 1000);
    }
    setNewsData(newsData.news);
  });

  if (!newsData) return <LoadingSpinner />;

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingsPage);
