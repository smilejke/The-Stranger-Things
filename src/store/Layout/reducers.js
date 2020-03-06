import {
  COLLAPSE_SIDE_BAR,
  DOWNLOAD_INFO_FOR_ACTORS_CARDS,
  LAUNCH_LOADING,
  STOP_LOADING,
} from './actions.js';

const defaultState = {
  loading: false,
  actorCards: [],
  sideBarCollapsed: true,
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLLAPSE_SIDE_BAR:
      return updateObject(state, { sideBarCollapsed: action.payload });
    case LAUNCH_LOADING:
      return updateObject(state, { loading: action.payload });
    case STOP_LOADING:
      return updateObject(state, { loading: action.payload });
    case DOWNLOAD_INFO_FOR_ACTORS_CARDS:
      return updateObject(state, { actorCards: action.payload });

    default:
      return state;
  }
};
