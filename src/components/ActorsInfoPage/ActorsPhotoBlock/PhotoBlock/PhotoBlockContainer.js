import React from 'react';
import FilterCheckbox from '../CheckboxFilter/Filter.js';
import Card from '../ActorCard/Card.js';
import '../../../../index.css';
import PageHeader from '../../../Layout/Header/Header.js';
import { useParams } from 'react-router-dom';

function ActorsMainPage(props) {
  const cardInfo = props.actors;
  let { id } = useParams();

  return (
    <div>
      <PageHeader text={'The Stranger things cast'} />

      <div id={id}>
        <div className='filter'>
          {cardInfo.length > 1 ? <FilterCheckbox actions={props.actions} /> : ''}
        </div>
        <div className='actor-container'>
          {cardInfo.map((actor) => {
            return <Card key={actor.id} options={actor} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ActorsMainPage;
