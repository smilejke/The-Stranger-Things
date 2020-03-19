import React, { useEffect } from 'react';
import FilterCheckbox from '../CheckboxFilter/Filter.js';
import Card from '../ActorCard/Card.js';
import '../../../../index.css';
import { useParams } from 'react-router-dom';
import Footer from '../../../Layout/Footer/Footer.js';
import { getActorsData } from '../../../../store/Layout/actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { categoryUrls, refreshPage } from '../../../../global/global.js';
import {
  selectMaincast,
  selectSecondary,
  selectMale,
  selectFemale,
  selectAll,
} from '../../../../store/FilterRoles/actions.js';

function ActorsMainPage(props) {
  let { id } = useParams();
  const {
    getActorsData,
    selectMaincast,
    selectSecondary,
    selectMale,
    selectFemale,
    selectAll,
  } = props;
  const { all, maincast, secondary, male, female } = categoryUrls;
  const cardInfo = props.actorCards;

  useEffect(() => {
    if (cardInfo.length < 1 && id === 'all') {
      refreshPage(getActorsData, all, selectAll);
    }
    if (cardInfo.length < 1 && id === 'maincast') {
      refreshPage(getActorsData, maincast, selectMaincast);
    }
    if (cardInfo.length < 1 && id === 'secondary') {
      refreshPage(getActorsData, secondary, selectSecondary);
    }
    if (cardInfo.length < 1 && id === 'male') {
      refreshPage(getActorsData, male, selectMale);
    }
    if (cardInfo.length < 1 && id === 'famale') {
      refreshPage(getActorsData, female, selectFemale);
    }
  }, [
    cardInfo,
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
  ]);

  return (
    <div>
      <div id={id} className='actor-page-main-box'>
        <div className='filter'>
          {cardInfo.length > 1 ? <FilterCheckbox actions={props.actions} /> : ''}
        </div>
        <div className='actor-container'>
          {cardInfo.map((actor) => {
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
    actorCards: state.layout.actorCards,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorsMainPage);
