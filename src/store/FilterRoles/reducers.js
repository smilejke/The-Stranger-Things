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

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_MAINCAST:
      return { ...defaultState, maincast: action.payload, all: false };
    case SELECT_SECONDARY:
      return { ...defaultState, secondary: action.payload, all: false };
    case SELECT_MALE:
      return { ...defaultState, male: action.payload, all: false };
    case SELECT_FEMALE:
      return { ...defaultState, female: action.payload, all: false };
    case SELECT_ALL_ACTORS:
      return { ...defaultState, all: action.payload };

    default:
      return state;
  }
};
