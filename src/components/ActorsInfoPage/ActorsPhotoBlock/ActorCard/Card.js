import React from 'react';
import '../../../../index.css';
import ActorInfoList from './ActorInfoList.js';
import HoverButton from './HoverEffectButton.js';

function Card(props) {
  const {
    img: { src, alt },
    id,
  } = props.options;

  return (
    <div className='actor-photo'>
      {' '}
      <img className='img-actor' src={src} alt={alt} />
      <ActorInfoList key={id} info={props.options} />
      <HoverButton />
    </div>
  );
}
export default Card;