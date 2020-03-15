import React from 'react';
import FilterCheckbox from '../CheckboxFilter/Filter.js';
import Card from '../ActorCard/Card.js';
import '../../../../index.css';
import { useParams } from 'react-router-dom';
import Footer from '../../../Layout/Footer/Footer.js';

function ActorsMainPage(props) {
  const cardInfo = props.actors;

  let { id } = useParams();

  return (
    <div>
      <div id={id} className='actor-page-main-box'>
        <div className='filter'>
          {cardInfo.length > 1 ? <FilterCheckbox actions={props.actions} /> : ''}
        </div>
        <div className='actor-container'>
          {cardInfo.map((actor) => {
            return <Card key={actor.id} options={actor} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActorsMainPage;
