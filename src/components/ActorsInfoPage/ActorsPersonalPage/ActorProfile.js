import React from 'react';
import '../../../index.css';
import Carousel from './Carousel/carousel.js';
import ShortDescription from './ShortDescription/ShortDescription.js';
import Biography from './Biography/Biography.js';
import CharacterInfo from './CharacterInfo/CharacterInfo.js';
import Filmography from './Filmography/Filmography.js';
import { useParams } from 'react-router-dom';
import PageHeader from '../../Layout/Header/Header.js';

function Profile(props) {
  let { id } = useParams();

  if (props.actor === null) return <div>Loading...</div>;

  id = props.actor.id;

  const { shortDescription, biography, characterInfo, films, name } = props.actor;

  return (
    <div>
      <PageHeader text={name} />

      <div className='actor-profile-main-cointainer' id={id}>
        <ShortDescription shortDescr={shortDescription} />

        <div className='profile-container'>
          <Carousel actor={props.actor} />
        </div>
        <Biography bio={biography} />
        <CharacterInfo text={characterInfo} />
        <Filmography films={films} />
      </div>
    </div>
  );
}

export default Profile;
