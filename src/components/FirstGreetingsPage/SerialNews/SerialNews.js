import React from 'react';
import News from './NewsGenerator/NewsGenerator.js';

function SerialNews(props) {
  const news = props.news;

  return (
    <div className='news-block'>
      <h2>{'Новости сериала'}</h2>
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
