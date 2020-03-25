import React from 'react';

function CurrentNewsHeader(props) {
  return (
    <div className='current-news-header'>
      <h1>{props.text}</h1>
      <p>{props.date}</p>
    </div>
  );
}

export default CurrentNewsHeader;
