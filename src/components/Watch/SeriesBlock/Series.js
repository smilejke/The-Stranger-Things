import React from 'react';
import EpisodeCard from './EpisodeCard/EpisodeCard.js';

function SeriesBlock(props) {
  const { title, serieData } = props.series;

  return (
    <div className='series-block-main-container'>
      <h2>{title}</h2>
      <div className='series-block-container'>
        {serieData.map((episode) => {
          return <EpisodeCard key={'S1E' + serieData.indexOf(episode)} episode={episode} />;
        })}
      </div>
    </div>
  );
}

export default SeriesBlock;
