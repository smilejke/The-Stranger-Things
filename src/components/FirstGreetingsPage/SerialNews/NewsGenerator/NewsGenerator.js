import React from 'react';
import { Link } from 'react-router-dom';

function News(props) {
  const {
    newsDate: { num, month },
    newsContent: { header, content },
    id,
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
            <Link to={`/news/${id}`}>
              <strong>{header}</strong>
            </Link>
          </div>
          <div className='news-body'>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default News;
