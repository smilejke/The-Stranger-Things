import React from 'react';

function EpisodeCard(props) {
  const {
    img: { src, alt },
    serieName,
    counter,
  } = props.episode;
  return (
    <div className='one-serie-block'>
      <img src={src} alt={alt} />
      <span>{serieName}</span>
      <span className='series-counter'>{counter}</span>
    </div>
  );
}
export default EpisodeCard;
