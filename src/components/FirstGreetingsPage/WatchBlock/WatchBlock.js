import React from 'react';

function WatchBlock(props) {
  const images = props.images;

  return (
    <div className='watch-block-container content-width'>
      <div className='watch-block-header'>
        <h3>Все сезоны</h3>
        <h3>3 сезона</h3>
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
