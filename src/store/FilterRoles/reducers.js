import {
  SELECT_MAINCAST,
  SELECT_SECONDARY,
  SELECT_MALE,
  SELECT_FEMALE,
  SELECT_ALL_ACTORS,
} from './actions.js';

const defaultState = {
  maincast: false,
  secondary: false,
  male: false,
  female: false,
  all: true,
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_MAINCAST:
      return updateObject(defaultState, { maincast: action.payload, all: false });
    case SELECT_SECONDARY:
      return updateObject(defaultState, { secondary: action.payload, all: false });
    case SELECT_MALE:
      return updateObject(defaultState, { male: action.payload, all: false });
    case SELECT_FEMALE:
      return updateObject(defaultState, { female: action.payload, all: false });
    case SELECT_ALL_ACTORS:
      return updateObject(defaultState, { all: action.payload });

    default:
      return state;
  }
};
