import { COLLAPSE_SIDE_BAR, DOWNLOAD_INFO_FOR_ACTORS_CARDS } from './actions.js';

const defaultState = {
  actorCards: [],
  sideBarCollapsed: true,
};

export const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDE_BAR:
      return { ...state, sideBarCollapsed: action.payload };
    case DOWNLOAD_INFO_FOR_ACTORS_CARDS:
      return { ...state, actorCards: action.payload };

    default:
      return state;
  }
};
