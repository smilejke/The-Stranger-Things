import React, { useEffect } from 'react';
import '../../../../index.css';
import { useParams } from 'react-router-dom';
import { getActorsData } from '../../../../store/ActorCards/actions.js';
import { startLoading, stopLoading } from '../../../../store/LoadingSpinner/actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { categoryUrls, refreshPage, setPageTitle } from '../../../../global/utils/global.js';
import {
  selectMaincast,
  selectSecondary,
  selectMale,
  selectFemale,
  selectAll,
} from '../../../../store/FilterRoles/actions.js';
import Footer from '../../../Layout/Footer/Footer.js';
import FilterCheckbox from '../CheckboxFilter/Filter.js';
import Card from '../ActorCard/ActorCardBody/Card.js';

function ActorsMainPage(props) {
  let { id } = useParams();
  const { all, maincast, secondary, male, female } = categoryUrls;
  const {
    getActorsData,
    selectMaincast,
    selectSecondary,
    selectMale,
    selectFemale,
    selectAll,
    actorCards,
    startLoading,
    stopLoading,
  } = props;

  const filterActions = {
    getActors: () => {
      getActorsData(all, startLoading, stopLoading);
    },
    getMaincast: () => {
      getActorsData(maincast, startLoading, stopLoading);
    },
    getSecondaryActors: () => {
      getActorsData(secondary, startLoading, stopLoading);
    },
    getMaleActors: () => {
      getActorsData(male, startLoading, stopLoading);
    },
    getFemaleActors: () => {
      getActorsData(female, startLoading, stopLoading);
    },
  };

  useEffect(() => {
    setPageTitle('Актеры сериала Очень странные дела');
    if (actorCards.length < 1 && id === 'all') {
      refreshPage(getActorsData, all, startLoading, stopLoading, selectAll);
    }
    if (actorCards.length < 1 && id === 'maincast') {
      refreshPage(getActorsData, maincast, startLoading, stopLoading, selectMaincast);
    }
    if (actorCards.length < 1 && id === 'secondary') {
      refreshPage(getActorsData, secondary, startLoading, stopLoading, selectSecondary);
    }
    if (actorCards.length < 1 && id === 'male') {
      refreshPage(getActorsData, male, startLoading, stopLoading, selectMale);
    }
    if (actorCards.length < 1 && id === 'female') {
      refreshPage(getActorsData, female, startLoading, stopLoading, selectFemale);
    }
  }, [
    actorCards,
    id,
    getActorsData,
    all,
    maincast,
    secondary,
    male,
    female,
    selectMaincast,
    selectSecondary,
    selectMale,
    selectFemale,
    selectAll,
    startLoading,
    stopLoading,
  ]);

  return (
    <div>
      <div id={id} className='actor-page-main-box'>
        <div className='filter'>
          {actorCards.length > 1 ? <FilterCheckbox actions={filterActions} /> : ''}
        </div>
        <div className='actor-container'>
          {actorCards.map((actor) => {
            return <Card key={actor.id} options={actor} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    actorCards: state.actorsData.actorCards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActorsData: bindActionCreators(getActorsData, dispatch),
    selectMaincast: bindActionCreators(selectMaincast, dispatch),
    selectSecondary: bindActionCreators(selectSecondary, dispatch),
    selectMale: bindActionCreators(selectMale, dispatch),
    selectFemale: bindActionCreators(selectFemale, dispatch),
    selectAll: bindActionCreators(selectAll, dispatch),
    startLoading: bindActionCreators(startLoading, dispatch),
    stopLoading: bindActionCreators(stopLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorsMainPage);
