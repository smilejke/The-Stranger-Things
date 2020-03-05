import React from 'react';

import Card from '../ActorCard/Card.js';
import '../../../../index.css';

function PhotoBlockContainer(props) {
  const cardInfo = props.actors;

  return (
    <div className='actor-container'>
      {cardInfo.map((actor) => {
        return <Card key={actor.id} options={actor} />;
      })}
    </div>
  );
}

export default PhotoBlockContainer;
