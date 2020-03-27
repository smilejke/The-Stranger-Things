import React, { useEffect } from 'react';
import '../../../index.css';
import { getActorsData } from '../../../store/ActorProfile/actions.js';
import { startLoading, stopLoading } from '../../../store/Layout/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel/carousel.js';
import ShortDescription from './ShortDescription/ShortDescription.js';
import Biography from './Biography/Biography.js';
import CharacterInfo from './CharacterInfo/CharacterInfo.js';
import Filmography from './Filmography/Filmography.js';
import Footer from '../../Layout/Footer/Footer.js';

function Profile(props) {
  let { id } = useParams();
  const { getActorsData, profileToSearch } = props;

  useEffect(() => {
    if (profileToSearch.id !== id) {
      getActorsData(id, startLoading, stopLoading);
    }
  }, [id, profileToSearch, getActorsData]);

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
    profileToSearch: state.profile.profileToSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActorsData: bindActionCreators(getActorsData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
