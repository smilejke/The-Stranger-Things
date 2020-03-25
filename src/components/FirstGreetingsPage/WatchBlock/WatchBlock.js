import React from 'react';
import { Link } from 'react-router-dom';
import { seasonIds, HeaderText } from '../../../global/utils/global.js';

function WatchBlock(props) {
  const images = props.images;
  const {
    watchBlock: { announcer, seasonCount },
  } = HeaderText;

  return (
    <div className='watch-block-container content-width'>
      <div className='watch-block-header'>
        <span>{announcer}</span>
        <span>{seasonCount}</span>
      </div>
      <div className='watch-block-content'>
        {images.map((elem) => {
          return (
            <div className='watch-block-season' key={'season' + images.indexOf(elem)}>
              <Link to={`watch/${seasonIds[images.indexOf(elem)].id}`}>
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
