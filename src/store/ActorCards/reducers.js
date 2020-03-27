import { DOWNLOAD_INFO_FOR_ACTORS_CARDS } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  actorCards: [],
};

export const actorsData = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOAD_INFO_FOR_ACTORS_CARDS:
      return updateObject(state, { actorCards: action.payload });

    default:
      return state;
  }
};
