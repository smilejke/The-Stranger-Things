import React from 'react';
import '../../../../index.css';
import ActorInfoList from './ActorInfoList.js';
import HoverButton from './HoverEffectButton.js';

function Card(props) {
  const {
    img: { src, alt },
  } = props.options;
  const identificator = props.options.id;

  return (
    <div className='actor-photo'>
      {' '}
      <img className='img-actor' src={src} alt={alt} />
      <ActorInfoList key={identificator} info={props.options} />
      <HoverButton urlData={props.options} />
    </div>
  );
}
export default Card;
