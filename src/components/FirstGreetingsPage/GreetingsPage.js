import React, { useState, useEffect } from 'react';
import GreetTittle from './Title/Title.js';
import SerialDescription from './SerialDescription/SerialDescription.js';
import WatchBlock from './WatchBlock/WatchBlock.js';
import SerialAnatomy from './Anatomy/Anatomy.js';
import SerialNews from './SerialNews/SerialNews.js';
import SerialSidebar from './SerialSidebar/SerialSidebar.js';
import { useDispatch } from 'react-redux';
import Footer from '../Layout/Footer/Footer.js';
import { startLoading, stopLoading } from '../../store/Layout/actions.js';
import { fetchUrls } from '../../global/global.js';

function GreetingsPage() {
  const [newsData, setData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'The Stranger Things';
    dispatch(startLoading());
    setTimeout(() => {
      fetch(fetchUrls.mainPageData)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .then(() => {
          dispatch(stopLoading());
        }, 100);
    }, 900);
  }, [dispatch]);

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

export default GreetingsPage;
