import React from 'react';
import '../../../../../index.css';
import { Link, useRouteMatch } from 'react-router-dom';
import ActorInfoList from '../ActorInfoList/ActorInfoList.js';
import HoverButton from '../CardButton/HoverEffectButton.js';

function Card(props) {
  const {
    img: { src, alt },
    id,
  } = props.options;

  let { url } = useRouteMatch();

  return (
    <div className='actor-photo'>
      {' '}
      <Link to={`${url}/${id}`}>
        <img className='img-actor' src={src} alt={alt} />
      </Link>
      <ActorInfoList key={id} info={props.options} />
      <HoverButton urlData={props.options} />
    </div>
  );
}

export default Card;
