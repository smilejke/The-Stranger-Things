import React from 'react';
import '../../index.css';
import ActorInfoList from './ActorInfoList.js';

function Card(props) {
  const {
    img: { src, alt },
  } = props.options;

  return (
    <div className='actor-photo'>
      {' '}
      <div className='actor-photo-grid-col1'>
        {' '}
        <img style={{ width: '200px', height: '300px' }} src={src} alt={alt} />
      </div>
      <div className='actor-photo-grid-col2'>
        <ActorInfoList info={props.options} />
      </div>
    </div>
  );
}
export default Card;
