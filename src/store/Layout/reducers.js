import { DOWNLOAD_INFO_FOR_ACTORS_CARDS, LAUNCH_LOADING, STOP_LOADING } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  loading: false,
  actorCards: [],
};

export const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LAUNCH_LOADING:
      return updateObject(state, { loading: true });
    case STOP_LOADING:
      return updateObject(state, { loading: false });
    case DOWNLOAD_INFO_FOR_ACTORS_CARDS:
      return updateObject(state, { actorCards: action.payload });

    default:
      return state;
  }
};
