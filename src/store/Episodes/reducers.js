import { GET_CURRENT_EPISODES_DATA_BY_ID } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  currentEpisodeData: false,
};

export const episodes = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CURRENT_EPISODES_DATA_BY_ID:
      return updateObject(state, { currentEpisodeData: action.payload });

    default:
      return state;
  }
};
