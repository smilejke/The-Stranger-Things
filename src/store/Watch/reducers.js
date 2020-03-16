import { LOAD_SEASON_INFO_DATA } from './actions.js';
import { updateObject } from '../../global/global.js';

const defaultState = {
  currentSeason: false,
};

export const getSerialEpisodesData = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SEASON_INFO_DATA:
      return updateObject(state, { currentSeason: action.payload[0] });
    default:
      return state;
  }
};
