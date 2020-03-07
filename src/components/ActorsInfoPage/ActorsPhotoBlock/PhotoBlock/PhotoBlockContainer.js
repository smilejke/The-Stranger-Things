import React from 'react';
import FilterCheckbox from '../CheckboxFilter/Filter.js';
import Card from '../ActorCard/Card.js';
import '../../../../index.css';

function PhotoBlockContainer(props) {
  const cardInfo = props.actors;

  return (
    <div>
      <div className='filter'>
        {cardInfo.length > 1 ? <FilterCheckbox actions={props.actions} /> : ''}
      </div>
      <div className='actor-container'>
        {cardInfo.map((actor) => {
          return <Card key={actor.id} options={actor} />;
        })}
      </div>
    </div>
  );
}

export default PhotoBlockContainer;
