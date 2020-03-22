import {
  SELECT_MAINCAST,
  SELECT_SECONDARY,
  SELECT_MALE,
  SELECT_FEMALE,
  SELECT_ALL_ACTORS,
} from './actions.js';
import { updateObject } from '../../global/utils/global.js';

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
      return updateObject(defaultState, { maincast: true, all: false });
    case SELECT_SECONDARY:
      return updateObject(defaultState, { secondary: true, all: false });
    case SELECT_MALE:
      return updateObject(defaultState, { male: true, all: false });
    case SELECT_FEMALE:
      return updateObject(defaultState, { female: true, all: false });
    case SELECT_ALL_ACTORS:
      return updateObject(defaultState, { all: true });

    default:
      return state;
  }
};
