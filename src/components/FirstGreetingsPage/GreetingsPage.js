import React, { useState, useEffect } from 'react';
import GreetTittle from './Title/Title.js';
import SerialDescription from './SerialDescription/SerialDescription.js';
import WatchBlock from './WatchBlock/WatchBlock.js';
import SerialAnatomy from './Anatomy/Anatomy.js';
import SerialNews from './SerialNews/SerialNews.js';

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

  if (!data) return <div>Loading</div>;
  const { header, shortDescription, watchBlock, anatomy, news } = data;

  return (
    <div className='greetings-page-main-container'>
      <GreetTittle header={header} />
      <SerialDescription description={shortDescription} />
      <WatchBlock images={watchBlock} />
      <SerialAnatomy data={anatomy} />
      <SerialNews news={news} />
    </div>
  );
}

export default GreetingsPage;
