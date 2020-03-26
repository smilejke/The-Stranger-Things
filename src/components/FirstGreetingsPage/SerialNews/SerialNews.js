import React, { useEffect, useState } from 'react';
import News from './NewsGenerator/NewsGenerator.js';
import { HeaderText, fetchUrls } from '../../../global/utils/global.js';

function SerialNews() {
  const { newsHeader } = HeaderText;
  const [newsData, setData] = useState(false);

  useEffect(() => {
    if (!newsData) {
      fetch(fetchUrls.news)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [newsData]);

  if (!newsData) return null;

  return (
    <div className='news-block'>
      <h2>{newsHeader}</h2>
      {newsData.map((elem) => {
        return (
          <div key={'news' + newsData.indexOf(elem)}>
            <News news={elem} id={elem.id} />
          </div>
        );
      })}
    </div>
  );
}

export default SerialNews;
