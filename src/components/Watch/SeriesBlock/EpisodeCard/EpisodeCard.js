import React from 'react';
import { getCurrentEpDescription } from '../../../../store/Episodes/actions.js';
import { useDispatch } from 'react-redux';

function EpisodeCard(props) {
  const {
    img: { src, alt },
    serieName,
    counter,
    description,
  } = props.episode;

  const dispatch = useDispatch();

  return (
    <div
      className='one-serie-block'
      onClick={() => {
        dispatch(getCurrentEpDescription(description));
      }}
    >
      <img src={src} alt={alt} className='season-block-image' />
      <span>{serieName}</span>
      <span>{counter}</span>
    </div>
  );
}
export default EpisodeCard;
