import React from 'react';
import '../../../index.css';
import Carousel from './Carousel/carousel.js';

function Profile(props) {
  return (
    <div className='profile-container'>
      <Carousel actor={props.actor} />
    </div>
  );
}
export default Profile;
