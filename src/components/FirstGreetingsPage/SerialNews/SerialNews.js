import React from 'react';
import News from './NewsGenerator/NewsGenerator.js';

function SerialNews(props) {
  return props.news.map((elem) => {
    return (
      <div className='news-block' key={'news' + props.news.indexOf(elem)}>
        <h2>{elem.header}</h2>
        <News news={elem} />
      </div>
    );
  });
}

export default SerialNews;
