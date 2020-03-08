import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import {
  selectMaincast,
  selectSecondary,
  selectMale,
  selectFemale,
  selectAll,
} from '../../../../store/FilterRoles/actions.js';
import Checkbox from './CheckboxCreator/FilterCheckbox.js';
import { Link, useRouteMatch } from 'react-router-dom';

function FilterCheckbox(props) {
  let match = useRouteMatch();
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
    { flag: all, select: selectAll, getData: getActors, text: 'All cast', id: nanoid(), url: ' ' },
    {
      flag: maincast,
      select: selectMaincast,
      getData: getMaincast,
      text: 'Maincast',
      id: nanoid(),
      url: 'maincast',
    },
    {
      flag: secondary,
      select: selectSecondary,
      getData: getSecondaryActors,
      text: 'Secondary actors',
      id: nanoid(),
      url: 'secondary',
    },

    {
      flag: male,
      select: selectMale,
      getData: getMaleActors,
      text: 'Male',
      id: nanoid(),
      url: 'male',
    },
    {
      flag: female,
      select: selectFemale,
      getData: getFemaleActors,
      text: 'Female',
      id: nanoid(),
      url: 'female',
    },
  ];

  return (
    <div className='site-checkbox-all-wrapper'>
      {checkboxOptions.map((checkbox) => {
        return (
          <Link key={checkbox.id} to={`${match.url}/${checkbox.url}`}>
            {<Checkbox options={checkbox} />}
          </Link>
        );
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
    loading: state.layout.loading,
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
