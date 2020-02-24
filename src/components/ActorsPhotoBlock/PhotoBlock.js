import React from 'react';
import '../../index.css';
import { actors } from '../general/photoBlockData.js';
import Card from './Card.js';

function PhotoBlock() {
  return (
    <div className='photo-section'>
      <div className='actor-container'>
        {actors.map((el) => {
          return <Card key={el.id} options={el} />;
        })}
      </div>
    </div>
  );
}

export default PhotoBlock;
