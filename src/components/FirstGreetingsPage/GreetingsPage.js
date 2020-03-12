import React, { useState, useEffect } from 'react';
import GreetTittle from './Title/Title.js';
import SerialDescription from './SerialDescription/SerialDescription.js';
import WatchBlock from './WatchBlock/WatchBlock.js';
import SerialAnatomy from './Anatomy/Anatomy.js';
import SerialNews from './SerialNews/SerialNews.js';
import PageHeader from '../Layout/Header/Header.js';
import LoadingSpinner from '../Layout/loadingEffect/loading.js';
import SerialSidebar from './SerialSidebar/SerialSidebar.js';

function GreetingsPage() {
  const [data, setData] = useState(false);

  useEffect(() => {
    if (!data) {
      setTimeout(() => {
        fetch('http://localhost:3001/greetings')
          .then((response) => response.json())
          .then((data) => setData(data));
      }, 1000);
    }
  });

  if (!data) return <LoadingSpinner />;

  const { header, shortDescription, watchBlock, anatomy, news } = data;

  return (
    <div>
      <PageHeader text={'Welcome to Hawkins!'} />

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
    </div>
  );
}

export default GreetingsPage;
