import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams, useRouteMatch } from 'react-router-dom';

function SerialDescription(props) {
  const {
    currentEpisodeData: { episodeName, text },
  } = props;
  const { id } = useParams();
  let { url } = useRouteMatch();

  if (!props.currentEpisodeData) return <Redirect to={`${url.replace('/' + id, '')}`} />;

  return (
    <div className='serial-description-container'>
      <h2>{episodeName}</h2>
      {text.map((paragraph) => {
        return <p key={'episodeParagraph' + text.indexOf(paragraph)}>{paragraph}</p>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentEpisodeData: state.episodes.currentEpisodeData,
    currentSeasonData: state.getSerialEpisodesData.currentSeasonData,
  };
};

export default connect(mapStateToProps)(SerialDescription);
