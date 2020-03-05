import React from 'react';
import '../../../../index.css';
import Card from '../ActorCard/Card.js';

function PhotoBlock(props) {
  const cardInfo = props.data;
  return (
    <div className='photo-section'>
      <div className='actor-container'>
        {cardInfo.map((actor) => {
          return <Card key={actor.id} options={actor} />;
        })}
      </div>
    </div>
  );
}

export default PhotoBlock;
