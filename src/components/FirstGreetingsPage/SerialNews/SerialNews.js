import React from 'react';
import News from './NewsGenerator/NewsGenerator.js';
import { HeaderText } from '../../../global/utils/global.js';

function SerialNews(props) {
  const news = props.news;
  const { newsHeader } = HeaderText;

  return (
    <div className='news-block'>
      <h2>{newsHeader}</h2>
      {news.map((elem) => {
        return (
          <div key={'news' + news.indexOf(elem)}>
            <News news={elem} id={elem.id} />
          </div>
        );
      })}
    </div>
  );
}

export default SerialNews;
