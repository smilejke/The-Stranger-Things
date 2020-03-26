import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams, useRouteMatch } from 'react-router-dom';

function SerialDescription(props) {
  const {
    currentEpisodeData: { episodeName, text },
  } = props;
  const { id } = useParams();
  let { url } = useRouteMatch();

  useEffect(() => {
    const serieDescr = document.getElementById(id);
    if (serieDescr) {
      serieDescr.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [id]);

  if (!props.currentEpisodeData) return <Redirect to={`${url.replace('/' + id, '')}`} />;

  return (
    <div className='serial-description-container' id={id}>
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
    currentSeasonData: state.seasons.currentSeasonData,
  };
};

export default connect(mapStateToProps)(SerialDescription);
