import React from 'react';

function WatchBlock(props) {
  const images = props.images;

  return (
    <div className='watch-block-container'>
      <div className='watch-block-header'>
        <span>
          <strong>Все сезоны</strong>
        </span>
        <span>3 сезона</span>
      </div>
      <div className='watch-block-content'>
        {images.map((elem) => {
          return (
            <div className='watch-block-season' key={'season' + images.indexOf(elem)}>
              <img src={elem.src} alt={elem.alt}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchBlock;
