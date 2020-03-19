import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  selectMaincast,
  selectSecondary,
  selectMale,
  selectFemale,
  selectAll,
} from '../../../../store/FilterRoles/actions.js';
import Checkbox from './CheckboxCreator/FilterCheckbox.js';

function FilterCheckbox(props) {
  const {
    selectAll,
    selectMaincast,
    selectSecondary,
    selectMale,
    selectFemale,
    maincast,
    secondary,
    male,
    female,
    all,
    actions: { getActors, getMaincast, getSecondaryActors, getMaleActors, getFemaleActors },
  } = props;

  const checkboxOptions = [
    {
      category: all,
      select: selectAll,
      getData: getActors,
      text: 'All cast',
      id: 'catAll',
      adress: 'all',
    },
    {
      category: maincast,
      select: selectMaincast,
      getData: getMaincast,
      text: 'Maincast',
      id: 'catMaincast',
      adress: 'maincast',
    },
    {
      category: secondary,
      select: selectSecondary,
      getData: getSecondaryActors,
      text: 'Secondary actors',
      id: 'catSecondary',
      adress: 'secondary',
    },
    {
      category: male,
      select: selectMale,
      getData: getMaleActors,
      text: 'Male',
      id: 'catMale',
      adress: 'male',
    },
    {
      category: female,
      select: selectFemale,
      getData: getFemaleActors,
      text: 'Female',
      id: 'catFemale',
      adress: 'female',
    },
  ];

  return (
    <div className='site-checkbox-all-wrapper'>
      {checkboxOptions.map((checkbox) => {
        return <Checkbox key={checkbox.id} options={checkbox} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    maincast: state.filter.maincast,
    secondary: state.filter.secondary,
    male: state.filter.male,
    female: state.filter.female,
    all: state.filter.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectMaincast: bindActionCreators(selectMaincast, dispatch),
    selectSecondary: bindActionCreators(selectSecondary, dispatch),
    selectMale: bindActionCreators(selectMale, dispatch),
    selectFemale: bindActionCreators(selectFemale, dispatch),
    selectAll: bindActionCreators(selectAll, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
