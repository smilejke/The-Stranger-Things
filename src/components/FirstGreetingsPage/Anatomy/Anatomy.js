import React from 'react';
import { HeaderText } from '../../../global/utils/global.js';

function SerialAnatomy(props) {
  const { image, paragraphs } = props.data;
  const { anatomy } = HeaderText;

  return (
    <div className='anatomy-container'>
      <h2>{anatomy}</h2>
      <img src={image.src} alt={image.alt}></img>
      {paragraphs.map((p) => {
        return <p key={'anatomy' + paragraphs.indexOf(p)}>{p}</p>;
      })}
    </div>
  );
}

export default SerialAnatomy;
