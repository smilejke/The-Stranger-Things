import React from 'react';
import { Link } from 'react-router-dom';
import { seasonIds } from '../../../global/global.js';

function WatchBlock(props) {
  const images = props.images;
  return (
    <div className='watch-block-container content-width'>
      <div className='watch-block-header'>
        <span>Все сезоны</span>
        <span>3 сезона</span>
      </div>
      <div className='watch-block-content'>
        {images.map((elem) => {
          return (
            <div className='watch-block-season' key={'season' + images.indexOf(elem)}>
              <Link to={`watch/${seasonIds[images.indexOf(elem)]}`}>
                <img src={elem.src} alt={elem.alt}></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchBlock;
