import React from 'react';

function CurrentNewsContent(props) {
  const content = props.content;
  const { src, alt } = props.image;

  return (
    <div className='current-news-content'>
      <img src={src} alt={alt}></img>
      {content.map((paragraph) => {
        return <p key={'newsPar' + content.indexOf(paragraph)}>{paragraph}</p>;
      })}
    </div>
  );
}

export default CurrentNewsContent;
