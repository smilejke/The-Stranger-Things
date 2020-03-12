import React from 'react';
import News from './NewsGenerator/NewsGenerator.js';

function SerialNews(props) {
  return (
    <div className='news-block'>
      <h2>{'Новости сериала'}</h2>
      {props.news.map((elem) => {
        return (
          <div key={'news' + props.news.indexOf(elem)}>
            <News news={elem} />
          </div>
        );
      })}
    </div>
  );
}

export default SerialNews;
