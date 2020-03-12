import React from 'react';

function News(props) {
  const {
    newsDate: { num, month },
    newsContent: { header, content },
  } = props.news;

  return (
    <div>
      <div className='single-news-container'>
        <div className='news-date'>
          <span className='news-number-date'>{num}</span>
          <span>{month}</span>
        </div>
        <div className='one-new-news'>
          <div className='news-title'>
            <strong>{header}</strong>
          </div>
          <div className='news-body'>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default News;
