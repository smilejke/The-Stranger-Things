import React from 'react';
import '../../../index.css';
import Carousel from './Carousel/carousel.js';
import ShortDescription from './ShortDescription/ShortDescription.js';
import Biography from './Biography/Biography.js';
import CharacterInfo from './CharacterInfo/CharacterInfo.js';
import Filmography from './Filmography/Filmography.js';

function Profile(props) {
  if (props.actor === null) return <div>Data is not found</div>;

  return (
    <div className='actor-profile-main-cointainer'>
      <ShortDescription shortDescr={props.actor.shortDescription} />

      <div className='profile-container'>
        <Carousel actor={props.actor} />
      </div>
      <Biography bio={props.actor.biography} />
      <CharacterInfo text={props.actor.characterInfo} />
      <Filmography films={props.actor.films} />
    </div>
  );
}

export default Profile;
