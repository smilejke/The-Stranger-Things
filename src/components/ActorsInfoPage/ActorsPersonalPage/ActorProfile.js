import React, { useEffect } from 'react';
import '../../../index.css';
import Carousel from './Carousel/carousel.js';
import ShortDescription from './ShortDescription/ShortDescription.js';
import Biography from './Biography/Biography.js';
import CharacterInfo from './CharacterInfo/CharacterInfo.js';
import Filmography from './Filmography/Filmography.js';
import { useParams } from 'react-router-dom';
import Footer from '../../Layout/Footer/Footer.js';
import { getActorsData } from '../../../store/Actor/actions.js';
import { startLoading, stopLoading } from '../../../store/Layout/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Profile(props) {
  let { id } = useParams();
  const { getActorsData, startLoading, stopLoading, profileToSearch } = props;

  useEffect(() => {
    if (!profileToSearch) getActorsData(id, startLoading, stopLoading);
  }, [id, profileToSearch, getActorsData, startLoading, stopLoading]);

  if (!profileToSearch) return null;

  const { shortDescription, biography, characterInfo, films } = profileToSearch;

  return (
    <div className='actor-profile-main-cointainer' id={id}>
      <ShortDescription shortDescr={shortDescription} />
      <div className='profile-container'>
        <Carousel actor={profileToSearch} />
      </div>
      <Biography bio={biography} />
      <CharacterInfo text={characterInfo} />
      <Filmography films={films} />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profileToSearch: state.getActor.profileToSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActorsData: bindActionCreators(getActorsData, dispatch),
    startLoading: bindActionCreators(startLoading, dispatch),
    stopLoading: bindActionCreators(stopLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
