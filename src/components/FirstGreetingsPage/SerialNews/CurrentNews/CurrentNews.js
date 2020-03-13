import React from 'react';

function CurrentNews(props) {
  console.log(props.current);
  const {
    header: { text, date },
    paragraphs,
    image: { src, alt },
  } = props.current.onOpen;

  return (
    <div>
      <div className='current-news-container'>
        <div className='current-news-header'>
          <h1>{text}</h1>
          <p>{date}</p>
        </div>

        <div className='current-news-content'>
          <img src={src} alt={alt}></img>
          {paragraphs.map((par) => {
            return <p key={'newsPar' + paragraphs.indexOf(par)}>{par}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CurrentNews;
