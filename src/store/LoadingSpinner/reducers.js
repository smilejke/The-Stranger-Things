import { LAUNCH_LOADING, STOP_LOADING } from './actions.js';
import { updateObject } from '../../global/utils/global.js';

const defaultState = {
  loading: false,
};

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LAUNCH_LOADING:
      return updateObject(state, { loading: true });
    case STOP_LOADING:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
};
