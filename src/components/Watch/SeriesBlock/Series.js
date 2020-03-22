import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import EpisodeCard from './EpisodeCard/EpisodeCard.js';
import SeasonDescription from '../SeasonDescription/SeasonDescription.js';
import SerialDescription from '../SerialDescription/SerialDescription.js';

function SeriesBlock(props) {
  const { title, serieData } = props.series;
  let { path, url } = useRouteMatch();

  return (
    <div className='series-block-main-container'>
      <h2>{title}</h2>
      <div className='series-block-container'>
        {serieData.map((episode) => {
          return (
            <Link
              to={`${url}/EP0${serieData.indexOf(episode) + 1}`}
              key={'S1E' + serieData.indexOf(episode)}
            >
              <EpisodeCard episode={episode} />
            </Link>
          );
        })}

        <Switch>
          <Route exact path={path}>
            <SeasonDescription description={props.description} />
          </Route>
          <Route path={`${path}/:id`}>
            <SerialDescription />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default SeriesBlock;
