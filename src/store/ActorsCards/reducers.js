import { DOWNLOAD_INFO_FOR_ACTORS_CARDS } from './actions.js';

const defaultState = {
  actorCards: [],
};

export const addCardInfo = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOAD_INFO_FOR_ACTORS_CARDS:
      return { ...state, actorCards: action.payload };

    default:
      return state;
  }
};
